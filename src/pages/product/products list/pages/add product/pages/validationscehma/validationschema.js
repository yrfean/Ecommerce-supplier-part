import * as Yup from "yup";

const validationSchema = Yup.object({
  unit_quantity: Yup.number()
    .typeError("must be a number")
    .positive("must be positive")
    .required("is required"),

  unit: Yup.string().required("Unit is required"),

  selling_price: Yup.number()
    .typeError("must be a number")
    .min(0, "cannot be negative")
    .required("is required"),

  mrp: Yup.number()
    .typeError("must be a number")
    .min(0, "cannot be negative")
    .required("is required")
    .test(
      "is-greater-than-selling-price",
      "greater than or equal to price",
      function (value) {
        const { selling_price } = this.parent;
        return !value || !selling_price || value >= selling_price;
      }
    ),

  packets: Yup.number()
    .typeError("must be a number")
    .integer("must be an integer")
    .min(1, "At least one packet is required")
    .required("is required"),
});

export default validationSchema;
