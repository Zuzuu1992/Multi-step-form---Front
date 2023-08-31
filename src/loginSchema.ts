import * as yup from "yup";

const loginSchema = yup.object({
  name: yup.string().required("This field is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("This field is required"),

  phone: yup
    .string()
    .matches(/^\+\d{1,3} ?\d{3} ?\d{3} ?\d{3}$/, "Invalid phone format")
    .required("This field is required"),
});

export default loginSchema;
