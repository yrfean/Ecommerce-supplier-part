const ButtonWithIcon = ({ icon: Icon, label }) => {
  return (
    <div className="bg-[#47BA82] items-center gap-1 transition-all duration-300 font-semibold cursor-pointer hover:bg-[#3DA372] rounded-lg w-full h-full text-white flex px-2 py-1">
      <div>{Icon ? <Icon className="w-5 h-5" /> : null}</div>
      <p className="text-nowrap">{label}</p>
    </div>
  );
};

export default ButtonWithIcon;
