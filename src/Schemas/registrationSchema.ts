import * as yup from "yup";

export const REGISTRATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required").min(5),
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required").min(8).max(32),
});
