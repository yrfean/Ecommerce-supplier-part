import PageProgresser from "./components/PageProgresser";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input";
import { useState } from "react";

const validationSchema = yup.object({
  accountNumber: yup.string().required("Account number is required"),
  confirmAccountNumber: yup
    .string()
    .required("required")
    .oneOf([yup.ref("accountNumber"), null], "Account numbers must match"),
  ifscCode: yup.string().required("required"),
});

const accountDetails = [
  {
    label: "Account Number",
    name: "accountNumber",
    type: "text",
    placeholder: "Enter your account number",
  },
  {
    label: "Confirm Account Number",
    name: "confirmAccountNumber",
    type: "text",
    placeholder: "Re-enter your account number",
  },
  {
    label: "IFSC Code",
    name: "ifscCode",
    type: "text",
    placeholder: "Enter your IFSC code",
  },
];

const BankDetails = () => {
  const [verified, setVerified] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      confirmAccountNumber: "",
      ifscCode: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      {/* top things */}
      <h1 className="text-2xl font-bold mb-1">Bank details</h1>
      <p className="text-md text-gray-700">Fill supplier bank details</p>
      {/* page progress bar */}
      <PageProgresser />

      {/* account details */}
      <div className="mt-8">
        {accountDetails.map((a) => (
          <div className="mb-3">
            <label>{a.label}</label>
            <Input
              formik={formik}
              name={a.name}
              placeholder={a.placeholder}
              type={a.type}
            />
          </div>
        ))}
      </div>
      {/* veryfy */}
      <div className="w-full flex mb-3 justify-center">
        <button
          className={`w-[50%] cursor-pointer text-white rounded py-1 ${
            verified ? "bg-[#47BA82]" : "bg-[#364960] hover:bg-[#2e3f54]"
          }`}
        >
          {verified ? "Verified" : "Verify"}
        </button>
      </div>

      {/* terms agreement */}
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          value={agreed}
          onClick={() => setAgreed((prev) => !prev)}
          className="size-5 cursor-pointer"
        />
        <p>I accept the terms of the callsouq supplier agreement.</p>
      </div>
      <button
        className={`bg-[#47BA82] w-full py-2 mt-2 transition-all duration-300 rounded-lg font-semibold text-white hover:bg-[#3DA372] outline outline-[#47BA82] ${
          agreed ? " cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        Save and Open account
      </button>
    </div>
  );
};

export default BankDetails;
