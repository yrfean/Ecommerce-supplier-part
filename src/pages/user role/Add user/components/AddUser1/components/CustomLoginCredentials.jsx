import { Eye, EyeClosed } from "lucide-react";
import Button from "./../../../../../../login and signup pages/components/ButtonNoIcon";
import { useState } from "react";
const CustomLoginCredentials = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-[400px] h-[345px] bg-white rounded-2xl p-3 pt-6">
      <h1 className="text-xl font-semibold">Custom login credentails</h1>

      <div className="bg-[#F4F4F4] p-3 py-5 rounded-lg mt-5">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your Username"
          className="px-3 py-2 w-full bg-white rounded outline outline-gray-200"
        />
        <div className="relative">
          <label htmlFor="username" className="mt-2 block">
            Username
          </label>
          <input
            placeholder="Enter your password"
            type={`${showPassword ? "text" : "password"}`}
            className="px-3 w-full py-2 bg-white rounded outline outline-gray-200"
          />
          {showPassword ? (
            <EyeClosed
              size={20}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            />
          ) : (
            <Eye
              size={20}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="mt-5">
        <Button value={"Done"} />
      </div>
    </div>
  );
};

export default CustomLoginCredentials;
