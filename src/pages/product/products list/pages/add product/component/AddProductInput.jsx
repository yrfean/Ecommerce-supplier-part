
const AddProductInput = ({label,placeholder,formik}) => {
  return (
    <div className='w-full h-[57]px'>
      <p className="font-medium">{label}</p>
      <input
        type="text"
        name=""
        placeholder={placeholder}
        className="w-full h-full outline-none bg-white px-4 py-2 rounded-lg"
      />
    </div>
  );
}

export default AddProductInput