import { ChevronDown, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLoginCredentials from "./components/CustomLoginCredentials";
import AddRole from "./components/AddRole";

const AddUser1 = () => {
  const [isDown, setIsDown] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showCustomLoginCredentials, setShowCustomLoginCrentails] =
    useState(false);
  const [showAddRole, setShowAddRole] = useState(false);

  const imageRef = useRef(null);
  const submitRef = useRef(null);

  const roles = ["Admin", "Manager", "Member", "Guest"];
  const handleImageClicked = () => {
    imageRef.current.click();
  };

  const initialValues = {
    userId: "",
    phoneNumber: "",
    userName: "",
    email: "",
    role: "",
  };

  const validationSchema = Yup.object({
    userId: Yup.string().required("User ID is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    userName: Yup.string().required("User Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.array().required("Role is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data", values);
    resetForm();
  };

  const handleSubmitButton = () => {
    submitRef.current.click();
  };

  return (
    <>
      <div
        onClick={() => {
          setShowCustomLoginCrentails(false);
          setShowAddRole(false);
        }}
        className={`fixed z-100 translation-all ease-in-out duration-500 bg-black/30 inset-0 ${
          showCustomLoginCredentials || showAddRole ? "" : "hidden"
        }`}
      />
      {/* Add role */}
      <div
        className={`fixed z-1000 transition-all duration-300 ${
          showAddRole
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-0 left-1/2 -translate-x-1/2 -translate-y-full"
        }`}
      >
        <AddRole />
      </div>
      {/* Custom login crendentials modal */}
      <div
        className={`fixed z-1000 transition-all duration-300 ${
          showCustomLoginCredentials
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-0 left-1/2 -translate-x-1/2 -translate-y-full"
        }`}
      >
        <CustomLoginCredentials />
      </div>

      <div className="bg-[#F6FBF8] rounded-lg w-full h-[395px] p-3 pt-6 overflow-y-auto custom-scrollbar">
        {/* img and custom credentials */}
        <div className="flex w-full gap-[4%]">
          <div className="w-[48%] flex gap-5 items-center justify-center">
            <div className="relative">
              <div className="rounded-full object-cover w-24 h-24 bg-white outline outline-gray-300 outline-dotted " />
              <div className="absolute right-0 bottom-3 w-fit rounded-full  b flex items-center justify-center bg-[#47BA82]">
                <Plus size={17} className="text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-lg ">Upload your photo</h1>
              <p className="text-sm text-gray-500">
                Kindly upload proffesional photo
              </p>
              <input type="file" ref={imageRef} hidden />
              <div
                onClick={() => handleImageClicked()}
                className="w-30 mt-3 h-8 flex items-center justify-center cursor-pointer text-white bg-[#47BA82] rounded"
              >
                Browse photo
              </div>
            </div>
          </div>
          <div className="w-[48%]  flex items-center justify-start">
            <label
              onClick={() => setShowCustomLoginCrentails(true)}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={showCustomLoginCredentials}
                className="sr-only peer"
              />
              <div className="w-5 h-5 bg-white border-1 border-gray-300 rounded peer-checked:bg-[#47BA82] peer-checked:border-[#47BA82] transition" />
              <span className="ml-2 text-sm">
                Custom credential configurations
              </span>
            </label>
          </div>
        </div>
        {/* inputs */}
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => {
              useEffect(() => {
                if (selectedRoles.length > 0)
                  setFieldValue("role", selectedRoles);
              }, [selectedRoles]);
              return (
                <Form className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block">User ID</label>
                      <Field
                        type="text"
                        name="userId"
                        placeholder="Enter User ID"
                        className="mt-1 w-full bg-white rounded px-3 py-2 outline outline-gray-200"
                      />
                      <ErrorMessage
                        name="userId"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block">Phone Number</label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your Phone Number"
                        className="mt-1 w-full bg-white rounded px-3 py-2 outline outline-gray-200"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block">Username</label>
                      <Field
                        type="text"
                        name="userName"
                        placeholder="Enter your Username"
                        className="mt-1 w-full bg-white rounded px-3 py-2 outline outline-gray-200"
                      />
                      <ErrorMessage
                        name="userName"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block">Email Address</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your Email address"
                        className="mt-1 w-full bg-white rounded px-3 py-2 outline outline-gray-200"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="">
                    <label className="block font-medium">Role</label>

                    <div
                      className={`relative w-[49%] bg-white h-full rounded-lg `}
                    >
                      <div
                        onClick={() => setIsDown((prev) => !prev)}
                        className="flex items-center w-full justify-between px-4 h-full cursor-pointer outline outline-gray-200 rounded"
                      >
                        <p
                          className={`w-full truncate py-2 
                              text-gray-500 
                          }`}
                        >
                          {selectedRoles.length > 0
                            ? "Roles Selected"
                            : "Choose Role"}
                        </p>
                        <ChevronDown
                          className={`transition-transform text-gray-500 ${
                            isDown ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {isDown && (
                        <div
                          className={`absolute p-1 bottom-full overflow-x-hidden custom-scrollbar overflow-y-scroll left-0 w-full bg-white shadow-md z-10`}
                        >
                          {roles.map((opt, index) => {
                            return (
                              <div
                                key={index}
                                className="flex mt-1 items-center justify-center gap-5 py-1 outline outline-gray-200 rounded"
                              >
                                <label htmlFor="" className="block w-16">
                                  {opt}
                                </label>
                                <input
                                  checked={selectedRoles.includes(opt)}
                                  type="checkbox"
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedRoles((prev) => [
                                        ...prev,
                                        opt,
                                      ]);
                                    } else {
                                      setSelectedRoles((prev) =>
                                        prev.filter((role) => role === opt)
                                      );
                                    }
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      hidden
                      ref={submitRef}
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="flex w-full h-[60px] items-end justify-end gap-3 pr-10">
        <button
          onClick={() => setShowAddRole(true)}
          type="button"
          className="w-[130px] transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[40px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]"
        >
          Add Role
        </button>
        <button
          onClick={() => handleSubmitButton()}
          type="button"
          className="w-[130px] transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[40px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AddUser1;
