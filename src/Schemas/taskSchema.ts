import * as yup from "yup";

export const TASK_SCHEMA = yup.object().shape({
  title: yup.string().required("Task title is required").min(5),
  description: yup.string().required("Description is required").min(8),
  deadline: yup.date().required("Deadline is required"),
  // status: yup.string().required("Status is required"),
  estimate_hours: yup.number(),
  priority: yup.string(),
  project_id: yup.string().required("Project is required"),
});
