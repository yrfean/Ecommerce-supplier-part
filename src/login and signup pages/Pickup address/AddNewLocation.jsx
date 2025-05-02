import Input from "../components/Input";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  buildingNumber: yup.string().required("required"),
  Landmark: yup.string().required("required"),
  pinCode: yup.string().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
});

const AddNewLocation = ({setNewLocationModal}) => {
  const formik = useFormik({
    initialValues: {
      buildingNumber: "",
      Landmark: "",
      pinCode: "",
      city: "",
      state: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const inputs = [
    {
      name: "buildingNumber",
      label: "Building Number",
      placeholder: "Enter Building Number",
    },
    { name: "Landmark", label: "Landmark", placeholder: "Enter Landmark" },
    { name: "pinCode", label: "Pin Code", placeholder: "Enter Pin Code" },
    { name: "city", label: "City", placeholder: "Enter City" },
    { name: "state", label: "State", placeholder: "Enter State" },
  ];
  return (
    <div className="">
      <h1 className="text-xl font-semibold my-3">Select pickup location</h1>

      {/* inputs */}
      {inputs.map((inp) => (
        <div>
          <label className="">{inp.label}</label>
          <div className="h-[10px">
            <input
              type="text"
              name={inp.name}
              placeholder={inp.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="outline-none bg-[#F4F4F4] w-full rounded-lg px-3 py-2"
            />
          </div>
        </div>
      ))}

      <div className="flex mt-7 w-full justify-end gap-3">
        <button onClick={()=>setNewLocationModal(false)} className="bg-[#F6FBF8] cursor-pointer w-34 py-1 transition-all duration-300 rounded-lg font-semibold text-[#47BA82] hover:bg-[#47BA82] hover:text-white outline outline-[#47BA82]">
          Cancel
        </button>
        <button className="bg-[#47BA82] cursor-pointer w-34 py-1 transition-all duration-300 rounded-lg font-semibold text-white hover:bg-[#3DA372] outline outline-[#47BA82]">
          Next
        </button>
      </div>
    </div>
  );
};

export default AddNewLocation;
