import React, { useState } from "react";
import Input from "../components/Input";
import Button from "./components/ButtonNoIcon";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSendOtp, useVerifyOtp } from "../Query/auth services/AuthMutate";

const validationSchemaOfNumber = yup.object({
  mobile: yup
    .string()
    .required("Number is required")
    .matches(/^[0-9]{10}$/, "Number must be exactly 10 digits"),

  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^[0-9]{6}$/, "OTP must be exactly 6 digits"),
});

const GetOtpPage = () => {
  const [sendedOtp, setSendedOtp] = useState(false);
  const navigate = useNavigate();

  const sendOtpMutation = useSendOtp();
  const verifyOtpMutation = useVerifyOtp();

  // formik to check if number is sendable
  const formikForNumber = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
    },
    validationSchema: validationSchemaOfNumber
  });

  const handleResendOtp = async () => {
    const mobile = formikForNumber.values.mobile;
    if (mobile) {
      try {
        await sendOtpMutation.mutateAsync({ mobile });
        console.log("OTP resent successfully");
      } catch (error) {
        console.error("Failed to resend OTP:", error);
      }
    }
  };

  const handleSendOtp = async () => {
    // Validate the mobile number first
    const errors = await formikForNumber.validateForm();
    if (!errors.mobile) {
      try {
        await sendOtpMutation.mutateAsync({ mobile: formikForNumber.values.mobile });
        localStorage.setItem("number", formikForNumber.values.mobile);
        setSendedOtp(true);
      } catch (error) {
        console.error("Failed to send OTP:", error);
      }
    } else {
      formikForNumber.setFieldTouched('mobile', true);
    }
  };

  const handleVerifyOtp = async () => {
    // Validate both mobile and OTP
    const errors = await formikForNumber.validateForm();
    if (!errors.mobile && !errors.otp) {
      try {
        console.log("Verifying OTP...");
        await verifyOtpMutation.mutateAsync({
          mobile: formikForNumber.values.mobile,
          otp: formikForNumber.values.otp,
        });
        console.log("OTP verified successfully");
        navigate("/setpassword");
      } catch (error) {
        console.error("Failed to verify OTP:", error);
      }
    } else {
      formikForNumber.setTouched({
        mobile: true,
        otp: true
      });
    }
  };

  return (
    <div className="mt-9">
      {/* top things */}
      <div className="mb-[20%]">
        <h1 className="text-3xl font-bold mb-1">
          Create your account to start
        </h1>
        <p className="text-md text-gray-700">
          We will send you a one time otp on your phone number
        </p>
      </div>
      {/* input and button */}
      <div className="space-y-6">
        <Input
          type={"text"}
          name={"mobile"}
          formik={formikForNumber}
          placeholder={"Enter Your Mobile Number"}
        />
        {sendedOtp ? (
          <div className="space-y-4">
            <Input
              placeholder={"OTP"}
              type={"text"}
              name={"otp"}
              formik={formikForNumber}
            />
            <div className="flex gap-3 font-semibold">
              <p>Didn't you receive OTP?</p>
              <button
                type="button"
                onClick={handleResendOtp}
                className="cursor-pointer text-[#47BA82]"
              >
                Resend OTP
              </button>
            </div>
          </div>
        ) : null}

        {sendedOtp ? (
          <div
            className="mt-6 cursor-pointer"
            onClick={handleVerifyOtp}
          >
            <Button value={"Verify OTP"} />
          </div>
        ) : (
          <div
            onClick={handleSendOtp}
            className="mt-6 cursor-pointer"
          >
            <Button value={"Send OTP"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetOtpPage;
