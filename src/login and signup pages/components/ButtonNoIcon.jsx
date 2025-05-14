const Button = ({ value }) => {
  return (
    <button type="submit" className="w-full transition-all duration-300 shadow font-bold tracking-wider text-white rounded-lg h-[45px] cursor-pointer text-center bg-[#47BA82] hover:bg-[#3DA372]">
      {value}
    </button>
  ); 
};

export default Button;
