import { useState } from "react";
import Input from "../components/Input";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import Button from "./components/ButtonNoIcon";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().required("email is required").email(),
  password: yup.string().required("password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //formik handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="mt-9">
      {/* top things */}
      <div className="mb-9">
        <h1 className="text-3xl font-bold mb-1">Welcome again,Name!</h1>
        <p className="text-md text-gray-700">
          Please log into your existing account
        </p>
      </div>
      {/* inputs */}
      <div className="space-y-4 mb-7">
        <Input
          name={"email"}
          placeholder={"Email adress"}
          icon={Mail}
          type={"text"}
          formik={formik}
        />
        <div className="relative">
          <Input
            name={"password"}
            placeholder={"Your Password"}
            icon={LockKeyhole}
            type={showPassword ? "text" : "password"}
            formik={formik}
          />
          <div className="absolute top-[16px] right-[25px] cursor-pointer text-gray-600">
            {showPassword ? (
              <EyeOff
                onClick={() => setShowPassword(false)}
                className="w-5 h-5"
              />
            ) : (
              <Eye onClick={() => setShowPassword(true)} className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
      {/* forgot pas */}
      <div className="font-semibold flex gap-4 mb-4">
        <p>Forgot Password?</p>
        <button
          type="button"
          className="text-[#47BA82] underline cursor-pointer"
        >
          Click here
        </button>
      </div>
      {/* login btn */}
      <div onClick={() => formik.handleSubmit()} className="w-full mb-7">
        <Button value={"Login"} />
      </div>

      <p className="mb-2">Dont have an account yet? Create New :)</p>

      {/* create new button */}
      <button
        onClick={() => navigate("/otpvalidation")}
        className="text-center shadow cursor-pointer rounded-lg h-[47px] w-full outline outine-[#47BA82] hover:bg-[#47BA82] hover:text-white transition-all duration-300 text-[#47BA82] hover-white font-bold tracking-wide"
      >
        Create new account
      </button>
    </div>
  );
};

export default Login;
