import { Mail, LockKeyhole } from "lucide-react";

const Input = ({ icon: Icon, placeholder, type, name, formik }) => {
  // const { values, handleChange, handleBlur, errors, touched } = formik;
  return (
    <div className={`relative mb-3 w-full h-[45px] bg-[#F6FBF8] rounded-lg ${formik?.touched[name]&&formik?.errors[name]?"outline outline-red-500":""}`}>
      {Icon ? (
        <Icon className="absolute w-5 h-5 left-[16px] top-[16px] text-gray-600" />
      ) : null}
      <input
        required
        name={name}
        value={formik?.values[name]}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        type={type}
        className={`w-full h-full font-semibold rounded-lg outline-none shadow placeholder:text-gray-600 ${
          formik?.errors[name] && formik.touched[name]
            ? "outline-2 outline-red-500"
            : ""
        } ${Icon ? "px-[52px]" : "px-[15px]"}`}
        placeholder={placeholder}
      />
      {formik?.errors[name] && formik?.touched[name] && (
        <div className="text-sm opacity-75 text-red-500">{formik?.errors[name]} </div>
      )}
    </div>
  );
};

export default Input;
