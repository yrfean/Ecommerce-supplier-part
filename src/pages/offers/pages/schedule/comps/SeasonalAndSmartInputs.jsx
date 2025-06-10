import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import DropdownInput from "../../../../product/products list/pages/add product/component/DropdownInput";
import Calender from "../../../../../components/DatePicker";
import { usePostEventOffers } from "../../../../../Query/Mutate";
import { useGetAllBatches, useGetProductIds, useGetStockDetails } from "../../../../../Query/products services/ProductsApi";


// Validation schema example
const validationSchema = Yup.object({
  product_id: Yup.string().required("Required"),
  batch: Yup.string().required("Required"),
  // stock_details: Yup.string().required("Required"),
  bulk_discount_percentage: Yup.number().min(0).required("Required"),
  bulk_quantity: Yup.number().min(0).required("Required"),
  product_offer_discount_percentage: Yup.number().min(0).required("Required"),
  offer_from: Yup.date().required("Required"),
  offer_to: Yup.date().required("Required"),
});

const initialValues = {
  offer_type: "",
  product_id: "",
  batch: "",
  stock_details: "",
  bulk_discount_percentage: "",
  bulk_quantity: "",
  product_offer_discount_percentage: "",
  offer_from: new Date().toISOString().split("T")[0],
  offer_to: "",
};

const SeasonalAndSmartInputs = ({ offerType }) => {
  const submitData = usePostEventOffers();
  // dropdown values
  const [productId, setProductId] = useState(null);
  const [batchId, setBatchId] = useState(null);

  // hooks calling
  const { data: productIds } = useGetProductIds();
  const { data: allBatches } = useGetAllBatches(productId);
  const { data: stockDetails } = useGetStockDetails(batchId);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted", values);
    submitData.mutate(values);
    resetForm();
  };
  useEffect(() => {
    if (allBatches) console.log(allBatches);
  }, [productId]);

  useEffect(() => {
    if (stockDetails) console.log(stockDetails);
  }, [batchId]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => {
        useEffect(() => {
          if (offerType) {
            setFieldValue("offer_type", offerType);
          }
        }, [offerType]);

        return (
          <Form className="w-full h-ful grid grid-cols-2 gap-5 mt-5 -space-y-2 overflow-y-scroll custom-scrollbar max-h-[330px] pb-1 px-5">
            <div className="flex flex-col">
              <DropdownInput
                options={productIds?.data[0].product_ids}
                label={"Product ID"}
                setValue={(value) => {
                  setFieldValue("product_id", value);
                  setProductId(value);
                }}
                placeholder={"Select Name"}
              />
              <ErrorMessage
                name="product_id"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <DropdownInput
                options={
                  allBatches
                    ? allBatches?.data.map((batch) => batch.batch_number)
                    : ["Choose product Id"]
                }
                label={"Batch"}
                setValue={(value) => {
                  const batchId = allBatches?.data.find(
                    (batch) => batch.batch_number === value
                  ).id;
                  setFieldValue("batch", batchId);
                  setBatchId(batchId);
                }}
                placeholder={"Choose Batch"}
              />
              <ErrorMessage
                name="batch"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col h-[30p]">
              <DropdownInput
                options={
                  stockDetails
                    ? stockDetails?.data.map((stock) => {
                        return (
                          stock.id +
                          "|" +
                          stock.unit +
                          stock.unit_name +
                          " Price:" +
                          stock.selling_price +
                          "₹"
                        );
                      })
                    : ["Choose Batch"]
                }
                label={"Stock Details"}
                setValue={(value) => {
                  const [stockId, label] = value.split("|");
                  setFieldValue("stock_details", [Number(stockId)]);
                }}
                placeholder={"Choose Stock Details"}
              />
              <ErrorMessage
                name="stock_details"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="bulk_discount_percentage"
                className="text-md tracking-wide"
              >
                Quantity For Bulk Offer
              </label>
              <Field
                min={0}
                type="number"
                name="bulk_discount_percentage"
                className="bg-white  h-[38px] rounded-lg px-2 outline outline-gray-300 focus:outline-[#47BA82] transition-all duration-300"
                placeholder=""
              />
              <ErrorMessage
                name="bulk_discount_percentage"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bulk_quantity" className="text-md tracking-wide">
                Bulk Offer(%)
              </label>
              <Field
                type="number"
                name="bulk_quantity"
                className="bg-white  h-[38px] rounded-lg px-2 outline outline-gray-300 focus:outline-[#47BA82] transition-all duration-300"
                placeholder=""
              />
              <ErrorMessage
                name="bulk_quantity"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="product_offer_discount_percentage"
                className="text-md tracking-wide"
              >
                Offer Per Product(%)
              </label>
              <Field
                type="number"
                name="product_offer_discount_percentage"
                className="bg-white h-[38px] rounded-lg px-2 outline outline-gray-300 focus:outline-[#47BA82] transition-all duration-300"
                placeholder=""
              />
              <ErrorMessage
                name="product_offer_discount_percentage"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex w-full gap-4">
              <div className="flex flex-col">
                <label htmlFor="offer_from" className="text-md tracking-wide">
                  Offer from
                </label>
                <Calender
                  setValue={(value) => setFieldValue("offer_from", value)}
                />
                <ErrorMessage
                  name="offer_from"
                  component={"div"}
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="offer_to" className="text-md tracking-wide">
                  Offer to
                </label>
                <Calender
                  setValue={(value) => setFieldValue("offer_to", value)}
                />
                <ErrorMessage
                  name="offer_to"
                  component={"div"}
                  className="text-red-500 text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="font-semibold text-white bg-[#47BA82] hover:bg-[#3DA372] transition-all duration-300 w-[150px] h-[40px] mt-5 ml-70 rounded-lg cursor-pointer"
            >
              Next
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SeasonalAndSmartInputs;
