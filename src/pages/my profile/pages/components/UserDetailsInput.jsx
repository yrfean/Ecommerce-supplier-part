const UserDetailsInput = ({ value, label, isEditable, ref }) => {
  return (
    <div>
      <label htmlFor={value} className="block text-lg mb-1">
        {label}
      </label>
      <input
        ref={ref}
        value={value}
        readOnly={!isEditable}
        type="text"
        className={`px-3 py-2 w-full rounded-md outline transition-all duration-300 outline-gray-200  text-gray-600 ${
          isEditable ? "shadow  bg-white font-semibold" : "bg-gray-50"
        } `}
      />
    </div>
  );
};

export default UserDetailsInput;
