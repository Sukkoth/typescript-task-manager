import * as yup from "yup";

export const FEEDBACK_SCHEMA = yup.object().shape({
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
  type: yup
    .string()
    .optional()
    .default("GENERAL")
    .oneOf(["BUG", "FEATURE", "GENERAL"], "Invalid feedback type"),
});
