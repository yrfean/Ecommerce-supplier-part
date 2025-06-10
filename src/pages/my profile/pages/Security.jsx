import EditableInputWithModal from "./components/EditableInputWithModal";

const Security = () => {
  return (
    <div className="grid grid-cols-1 w-full h-[240px] pr-1 overflow-auto md:grid-cols-2 gap-2 pb-2 rounded-lg max-w-4xl mx-auto">
      <div className="col-span-2 w-[50%]">
        <h2 className="text-lg font-semibold mb-2 ">Tax Details</h2>
        <EditableInputWithModal label="GSTIN Number" value="XXXXXXXXXXX" />
      </div>

      <div className="col-span-2 mt-1">
        <h2 className="text-lg font-semibold  ">Bank Details</h2>
      </div>
      <EditableInputWithModal label="Account Number" value="XXXXXXXXXX" />
      <EditableInputWithModal label="IFSC Code" value="XXXXXXX" />
      <div className="col-span-2 w-[50%]">
        <EditableInputWithModal label="Password" value="********" />
      </div>
    </div>
  );
};

export default Security;
