import { useState } from "react";
import Input from "../components/Input";
import { Mail, LockKeyhole, Eye, EyeOff, User } from "lucide-react";
import Button from "./components/ButtonNoIcon";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSignup } from "../Query/auth services/AuthMutate";

const validationSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
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

  const mutate = useSignup()

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (data) => {
      const mobile = localStorage.getItem("number");
      const submitData = {
        ...data,
        group_name: "Supplier",
        mobile
      };
      mutate.mutate(submitData);
      // console.log(submitData);
    },
  });

  return (
    <div className="">
      {/* Top things */}
      <div className="mb-[3%]">
        <h1 className="text-3xl font-bold mb-1">
          Create your account to start
        </h1>
        <p className="text-md text-gray-700">Set a password for your account</p>
      </div>

      {/* inputs */}
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <Input
            name={"first_name"}
            icon={User}
            formik={formik}
            placeholder={"First name"}
            type={"text"}
          />
          <Input
            name={"last_name"}
            icon={User}
            formik={formik}
            placeholder={"Last name"}
            type={"text"}
          />
          <Input
            name={"username"}
            icon={User}
            formik={formik}
            placeholder={"Username"}
            type={"text"}
          />
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
      </form>
    </div>
  );
};

export default SetPasswordPage;
