import { Search } from "lucide-react"

const Searchbar = () => {
  return (
    <div className="w-full h-[35px] relative">
      <input type="text" placeholder="Search you Location..." className="w-full outline-none h-full px-3 bg-[#F4F4F4] pr-9 rounded-lg"/>
      <div className="text-gray-400 absolute top-[7px] right-[20px]">
        <Search className="w-5 h-5" />
      </div>
    </div>
  );
}

export default Searchbar