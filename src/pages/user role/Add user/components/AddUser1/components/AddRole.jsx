import Button from "../../../../../../login and signup pages/components/ButtonNoIcon";

const AddRole = () => {
  return (
    <div className="w-[400px] h-[265px] bg-white rounded-2xl p-3 pt-6">
      <h1 className="text-xl font-semibold">Add New Role</h1>

      <div className="bg-[#F4F4F4] p-3 py-5 rounded-lg mt-5">
        <label htmlFor="new_role" className="block">
          New Role
        </label>
        <input
          type="text"
          placeholder="Enter new role"
          className="px-3 py-2 w-full bg-white rounded outline outline-gray-200"
        />
      </div>
      <div className="mt-5">
        <Button value={"Done"} />
      </div>
    </div>
  );
};

export default AddRole;
