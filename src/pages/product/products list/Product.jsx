import { ArrowDownZA, Funnel, Plus, Search } from "lucide-react";
import Button from "../../../components/ButtonWithIcon";
import { useEffect, useState } from "react";
import FilterOrSorting from "../../../components/FilterOrSorting";
import ProductsTable from "./components/ProductsTable";
import {
  useGetProductCategoriesForDropDown,
  useGetProducts,
  useGetProductsByCategory,
} from "../../../Query/Mutate";

const Product = () => {
  const [categoryId, setCategoryId] = useState(null);
  // first we will request using this to get all
  const { data } = useGetProducts();
  const { data: filtered, error } = useGetProductsByCategory(categoryId);

  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [filterOptions, setFilterOptions] = useState([]);
  const [productsFromData, setProductsFromData] = useState([]);

  const { data: category } = useGetProductCategoriesForDropDown(102);

  useEffect(() => {
    if (filtered?.data) {
      setProductsFromData(filtered.data);
    } else if (error) {
      console.log(error)
      alert("backend didnt make it an empty array");
    }
  }, [filtered, error]);
  useEffect(() => {
    if (data?.data) {
      setProductsFromData(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (categoryId === null || categoryId === "All") {
      setProductsFromData(data?.data || []);
    }
  }, [data, categoryId]);

  useEffect(() => {
    const names = category?.data?.map((cat) => cat.name) || [];
    const filterOptions = ["All", ...names];
    setFilterOptions(filterOptions);
  }, [category]);

  useEffect(() => {
    if (value === "All") {
      setCategoryId("All");
    } else {
      const id = category?.data?.find((cat) => cat.name === value)?.id;
      setCategoryId(id);
    }
  }, [value, category]);

  return (
    <div className="p-3 pt-4 w-full">
      {/* title and add prod btn */}
      <div className="flex justify-between w-full mb-3">
        <h1 className="text-xl font-bold">Product List</h1>
        <div
          onClick={() => (location.href = "product/add-product")}
          className="w-[135px] h-[40px]"
        >
          <Button icon={Plus} label={"Add product"} />
        </div>
      </div>
      {/* filtering ,searhcing,pagin.... */}
      <div className="bg-[#F8F8F8] w-full rounded-lg p-2 h-[60px] flex justify-between">
        {/* filter  and sorting*/}
        <div className="flex gap-3">
          {/* filter */}
          <div className="min-w-[140px]">
            <FilterOrSorting
              icon={Funnel}
              options={filterOptions}
              placeholder={"Category"}
              setValue={setValue}
            />
          </div>
        </div>
        {/* seaching,pagin */}
        <div className="flex gap-3">
          {/* search */}
          <div className="relative">
            <input
              type="text"
              name=""
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search product here..."
              className="bg-white rounded-lg h-[45px] font-semibold px-3 pl-8 outline-none"
            />
            <Search className="absolute w-5 h-5 text-gray-500 top-[12px] left-[8px]" />
          </div>
          {/* pagination buttons */}
          <div className="space-x-2">
            <button
              onClick={() => {
                if (currentPage >= 2) {
                  setCurrentPage((i) => i - 1);
                }
              }}
              className="h-full w-[105px] rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 bg-white px-2 text-gray-500 font-semibold "
            >
              {"<< Previous"}
            </button>
            <button className="h-full w-[50px] rounded-lg cursor-pointer bg-white px-2  font-semibold ">
              {currentPage?.toString().padStart(2, "0")}
            </button>
            <button
              onClick={() => {
                if (currentPage < maxPage) setCurrentPage((i) => i + 1);
              }}
              className="h-full hover:bg-[#3DA372] transition-all duration-300 w-[105px] rounded-lg cursor-pointer bg-[#47BA82] px-2 text-white font-semibold "
            >
              {"Next >>"}
            </button>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="w-full mt-1">
        <ProductsTable
          productsFromData={productsFromData}
          setCurrentPage={setCurrentPage}
          searchValue={searchValue}
          currentPage={currentPage}
          setMaxPage={setMaxPage}
        />
      </div>
    </div>
  );
};

export default Product;
