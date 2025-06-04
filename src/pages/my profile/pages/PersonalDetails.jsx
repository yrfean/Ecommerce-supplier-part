import { Building2, Mail, Phone } from "lucide-react";

const PersonalDetails = () => {
  return (
    <div>
      {/* dp,name and supplier */}
      <div className="flex items-center gap-3 ml-5">
        <div className="shadow-lg shadow-[#47BA82]/30 w-fit h-fit rounded-full bg-white p-1">
          <img
            src="/user2.avif"
            alt="user dp"
            className="w-[120px] h-[120px]  object-cover rounded-full outline-3 outline-[#47BA82]"
          />
        </div>
        <div>
          <h1 className="font-semibold text-xl">Hermione Granger</h1>
          <p className="text-sm">Supplier </p>
        </div>
      </div>
      {/* comp name ,number ,email */}
      <div className="flex gap-6 ml-7 mt-2">
        <div className="flex gap-2 text-sm items-center">
          <Building2 size={16} />
          <p>Company name</p>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <Phone size={16} />
          <p>+121 843902284</p>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <Mail size={16} />
          <p>Company@gmail.com</p>
        </div>
      </div>
      {/* line */}
      <div className="h-[1.2px]  my-2 bg-gray-300" />

    {/* inputs */}
     <div>
      hai
     </div>
    </div>
  );
};

export default PersonalDetails;
