import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../Button";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchemaOfNumber = yup.object({
  number: yup
    .string()
    .required("Number is required")
    .matches(/^[0-9]{10}$/, "Number must be exactly 10 digits"),
});

const GetOtpPage = () => {
  const [sendedOtp, setSendedOtp] = useState(false);

  // formik to check if number is sendablw
  const formikForNumber = useFormik({
    initialValues: {
      number: "user number",
    },
    validationSchema: validationSchemaOfNumber,
    onSubmit: (data) => {
      console.log(data);
      setSendedOtp(true);
    },
  });

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
      {/* input and buttin */}
      <div className="space-y-6">
        <Input
          type={"text"}
          name={"number"}
          formik={formikForNumber}
          placeholder={"Mobile number"}
        />
        {sendedOtp ? (
          <div className="space-y-4">
            <Input placeholder={"OTP"} type={"text"} />
            <div className="flex gap-3 font-semibold">
              <p>Didnt you recieve OTP?</p>
              <button
                onClick={() => formikForNumber.handleSubmit()}
                className="cursor-pointer text-[#47BA82]"
              >
                Resend OTP
              </button>
            </div>
          </div>
        ) : null}

        {sendedOtp ? (
          <Button value={"Verify OTP"} />
        ) : (
          <div
            onClick={() => {
              formikForNumber.handleSubmit();
            }}
          >
            <Button value={"Send OTP"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetOtpPage;
