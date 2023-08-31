import * as yup from "yup";

const loginSchema = yup.object({
  name: yup
    .string()
    .min(4, "name must be four or more characters")
    .required("name is required"),

  email: yup
    .string()
    .email("must be a valid email")
    .required("emmail is required"),

  phone: yup.number().required("phone is required"),
});

export default loginSchema;
