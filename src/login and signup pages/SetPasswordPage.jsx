import { useState } from "react";
import Input from "./components/Input";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import Button from "./components/Button";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  email: yup.string().email("Not a valid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters long")
    .matches(/(?=.*[a-z])/, "At least one lowercase letter is required")
    .matches(/(?=.*[A-Z])/, "At least one uppercase letter is required")
    .matches(/(?=.*\d)/, "At least one number is required")
    .matches(/(?=.*[@$!%*?&])/, "At least one special character is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirming password is required"),
});

const SetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="mt-9">
      {/* Top things */}
      <div className="mb-[15%]">
        <h1 className="text-3xl font-bold mb-1">
          Create your account to start
        </h1>
        <p className="text-md text-gray-700">Set a password for your account</p>
      </div>

      {/* inputs */}
      <div className="space-y-6 mb-[10%]">
        <Input
          icon={Mail}
          name={"email"}
          formik={formik}
          placeholder={"Email adress"}
          type={"text"}
        />
        {/* new pass */}
        <div className="relative ">
          <Input
            name={"password"}
            formik={formik}
            icon={LockKeyhole}
            placeholder={"New password"}
            type={showPassword ? "text" : "password"}
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute text-gray-700 right-[12px] top-[14px] w-6 h-6 cursor-pointer"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </div>
        </div>
        {/* confirm pass */}
        <div className="relative ">
          <Input
            name={"confirmPassword"}
            formik={formik}
            icon={LockKeyhole}
            placeholder={"Confirm password"}
            type={showConfirmPassword ? "text" : "password"}
          />
          <div
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute text-gray-700 cursor-pointer right-[12px] top-[14px] w-6 h-6"
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </div>
        </div>
      </div>
      <Button value={"Next"} />
    </div>
  );
};

export default SetPasswordPage;
