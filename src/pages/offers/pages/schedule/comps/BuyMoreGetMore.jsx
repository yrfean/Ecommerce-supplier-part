import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DropdownInput from "../../../../product/products list/pages/add product/component/DropdownInput";
import Calender from "../../../../../components/DatePicker";
import { useEffect, useState } from "react";
import { usePostOffers } from "../../../../../Query/Mutate";
import { useGetAllBatches, useGetProductIds, useGetStockDetails } from "../../../../../Query/products services/ProductsApi";

const validationSchema = Yup.object().shape({
  product: Yup.string().required("Product name is required"),
  batch: Yup.string().required("Batch is Required"),
  stock_details: Yup.array().required("Batch is Required"),
  buy_quantity: Yup.number()
    .typeError("Buy quantity must be a number")
    .required("Buy quantity is required")
    .min(1, "Buy quantity must be at least 1"),
  free_product: Yup.string().required("Batch is Required"),
  free_batch: Yup.string().required("Batch is Required"),
  free_stock_details: Yup.array().required("Batch is Required"),
  free_quantity: Yup.number()
    .typeError("Free quantity must be a number")
    .required("Free quantity is required")
    .min(0, "Free quantity cannot be negative"),
  offer_from: Yup.date()
    .typeError("Offer from must be a valid date")
    .required("Offer from is required"),
  offer_to: Yup.date()
    .typeError("Offer to must be a valid date")
    .required("Offer to is required")
    .min(Yup.ref("offer_from"), "Offer to must be after offer from"),
});

const initialValues = {
  product: "",
  batch: "",
  stock_details: "",
  buy_quantity: "",
  free_product: "",
  free_batch: "",
  free_stock_details: "",
  free_quantity: "",
  offer_from: new Date().toISOString().split("T")[0],
  offer_to: "",
};

const BuyMoreGetMore = () => {
  const postOffer = usePostOffers();
  const [productId, setProductId] = useState(null);
  const [batchId, setBatchId] = useState(null);

  // hooks calling
  const { data: productIds } = useGetProductIds();
  const { data: allBatches } = useGetAllBatches(productId);
  const { data: stock_details } = useGetStockDetails(batchId);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted data:", values);
    postOffer.mutate(values);
    resetForm();
  };

  useEffect(() => {
    if (allBatches) console.log(allBatches);
  }, [productId]);

  useEffect(() => {
    if (stock_details) console.log(stock_details);
  }, [batchId]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="w-full grid grid-cols-3 gap-5 mt-5 -space-y-1 overflow-y-scrol custom-scrollbar -h-[350px pb-2 px-5">
            <div className="flex flex-col">
              <DropdownInput
                options={productIds?.data[0].product_ids}
                label={"Product ID"}
                setValue={(value) => {
                  setFieldValue("product", value);
                  setProductId(value);
                }}
                placeholder={"Product Id"}
              />
              <ErrorMessage
                name="product"
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
            <div className="flex flex-col">
              <DropdownInput
                options={
                  stock_details
                    ? stock_details?.data.map((stock) => {
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
              <label htmlFor="buy_quantity" className="text-md tracking-wide">
                Buy Quantity
              </label>
              <Field
                type="number"
                name="buy_quantity"
                className="bg-white outline outline-gray-300 focus:outline-[#47BA82] transition-all duration-300 h-[38px] rounded-lg px-2 "
                placeholder="Buy Quantity"
              />
              <ErrorMessage
                name="buy_quantity"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-col">
              <DropdownInput
                options={productIds?.data[0].product_ids}
                label={"Free Product ID"}
                setValue={(value) => {
                  setFieldValue("free_product", value);
                  setProductId(value);
                }}
                placeholder={"Choose Free Product"}
              />
              <ErrorMessage
                name="free_product"
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
                label={"Free Batch"}
                setValue={(value) => {
                  const batchId = allBatches?.data.find(
                    (batch) => batch.batch_number === value
                  ).id;
                  setFieldValue("free_batch", batchId);
                  setBatchId(batchId);
                }}
                placeholder={"Choose Free Batch"}
              />
              <ErrorMessage
                name="free_batch"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-col">
              <DropdownInput
                options={
                  stock_details
                    ? stock_details?.data.map((stock) => {
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
                label={"Free Stock Details"}
                setValue={(value) => {
                  const [stockId, label] = value.split("|");

                  setFieldValue("free_stock_details", [Number(stockId)]);
                }}
                placeholder={"Choose Free Stock Details"}
              />
              <ErrorMessage
                name="free_stock_details"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="free_quantity" className="text-md tracking-wide">
                Free Quantity
              </label>
              <Field
                type="number"
                name="free_quantity"
                className="bg-white outline outline-gray-300 focus:outline-[#47BA82] transition-all duration-300 h-[38px]  rounded-lg px-2"
                placeholder="Pcs"
              />
              <ErrorMessage
                name="free_quantity"
                component={"div"}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex w-full gap-4">
              <div className="flex flex-col w-[48%]">
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
              <div className="flex flex-col w-[47%]">
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
              className="font-semibold absolute bottom-20 right-15 text-white bg-[#47BA82] hover:bg-[#3DA372] transition-all duration-300 w-[150px] h-[40px] mt-6 rounded-lg cursor-pointer"
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BuyMoreGetMore;
