import React, { useEffect, useRef, useState } from "react";
import ButtonWithIcon from "../../../../../../components/ButtonWithIcon";
import { List } from "lucide-react";
import PageProgressBar from "../component/PageProgressBar";
import { useFormik } from "formik";

import AddPd1 from "./AddPd1";
import AddPd2 from "./AddPd2";
import AddPd3 from "./AddPd3";
import * as yup from "yup";
import { useAddProduct } from "../../../../../../Query/products services/ProductsApi";

// const stock_details = [];

const AddProduct = () => {
  const [page, setPage] = useState(1);
  const AddProductMutation = useAddProduct();
  const [showExpiry, setShowExpiry] = useState(true);
  const [stockDetails, setStockDetails] = useState([]);
  // const [changedStockDetails, setChangedStockDetails] = useState([]);

  const validationSchema = yup.object({
    // title: yup.string().required("Title is required"),
    // category: yup.number().required("Category is required"),
    // subcategory: yup.number().required("Subcategory is required"),
    // description: yup.string().required("Description is required"),
    // brand: yup.string().required("Brand is required"),
    // gst: yup.number().required("GST is required"),
  });

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      title: "",
      category: "",
      subcategory: "",
      description: "",
      brand: "",
      gst: "",
      units: [
        {
          quantity: "",
          batch_number: "",
          expiry_date: "",
          manufacturing_date: "",
          low_stock_alert: "",
          expiry_notification_days: "",
          stock_details: [],
        },
      ],
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
      AddProductMutation.mutate(data);
      location.href = "/product";
    },
  });
  const {
    data: units,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUnits(formik.values.category);
  // transforming unit value into its id
  useEffect(() => {
    const changed = stockDetails.map((stock) => {
      const unitStock = units.data.find((u) => u.name === stock.unit);
      return {
        ...stock,
        unit: unitStock ? unitStock.id : null,
      };
    });
    if (changed) {
      formik.setFieldValue("units[0].stock_details", changed); // 👈 manually push it into form
    }
  }, [stockDetails]);
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
          <AddPd2
            setPage={setPage}
            formik={formik}
            showExpiry={showExpiry}
            stockDetails={stockDetails}
            setStockDetails={setStockDetails}
            units={units}
          />
        ) : (
          <AddPd3 formik={formik} />
        )}
      </div>
    </div>
  );
};

export default AddProduct;
