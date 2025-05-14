import React, { useRef, useState } from "react";
import ButtonWithIcon from "../../../../../../components/ButtonWithIcon";
import { List } from "lucide-react";
import PageProgressBar from "../component/PageProgressBar";
import Input from "../../../../../../components/Input";
import { useFormik } from "formik";
import DropdownInput from "../component/DropdownInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../../../../login and signup pages/components/ButtonNoIcon";
import AddPd1 from "./AddPd1";
import AddPd2 from "./AddPd2";
import AddPd3 from "./AddPd3";
import * as yup from "yup";
import { useAddProduct } from "../../../../../../Query/Muatate";

const validationSchema = yup.object({});

// const stock_details = [];

const AddProduct = () => {
  const [page, setPage] = useState(1);
  const AddProduct = useAddProduct();
  const [showExpiry, setShowExpiry] = useState(true);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: 2,
      subcategory: 6,
      description: "",
      brand: "",
      gst: 1,
      units: [
        {
          quantity: "",
          batch_number: "",
          expiry_date: "",
          manufacturing_date: "",
          low_stock_alert: "",
          expiry_notification_days: "",
          stock_details: [
            {
              unit_quantity: "",
              unit: 1,
              packets: "",
              mrp: "",
              selling_price: "",
            },
          ],
        },
      ],
    },
    onSubmit: (data) => {
      console.log(data);
      AddProduct.mutate(data);
    },
  });

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
      <div className="">
        <PageProgressBar pageNumber={page} setPage={setPage} />
      </div>

      {/* product details */}
      {/* <h1 className="text-lg font-semibold mt-0 mb-1">Product Details</h1> */}
      <div>
        {page === 1 ? (
          <AddPd1
            setPage={setPage}
            formik={formik}
            setShowExpiry={setShowExpiry}
          />
        ) : page === 2 ? (
          <AddPd2 setPage={setPage} formik={formik} showExpiry={showExpiry} />
        ) : (
          <AddPd3 formik={formik} />
        )}
      </div>
    </div>
  );
};

export default AddProduct;
