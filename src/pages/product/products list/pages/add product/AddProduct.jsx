import React from 'react'
import ButtonWithIcon from '../../../../../components/ButtonWithIcon';
import { List } from 'lucide-react';
import PageProgressBar from './component/PageProgressBar';

const AddProduct = () => {
  return (
    <div className="p-3 mt-1">
      {/* add product and product list */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Add Product</h1>
        <div
          onClick={() => (location.href = "/product")}
          className="text-center h-[35px] w-[130px]"
        >
          <ButtonWithIcon icon={List} label={"Product List"} />
        </div>
      </div>

      {/* page progress bar */}
      <div className="my-1">
        <PageProgressBar />
      </div>

      {/* product details */}
      <h1 className="text-lg font-semibold my-1">Product Details</h1>

      <div className="bg-[#F8F8F8] w-full h-[436px] rounded-lg"></div>
    </div>
  );
}

export default AddProduct