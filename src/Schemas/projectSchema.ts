import * as yup from "yup";

function rgbToHex(rgb: string): string {
  // Convert RGB to hexadecimal
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number);
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
  return `#${hex.toUpperCase()}`;
}

export const PROJECT_SCHEMA = yup.object().shape({
  name: yup.string().required("Project name is required").min(5),
  description: yup.string().required("Description is required").min(8),
  color: yup
    .string()
    .transform((_, originalValue) =>
      originalValue.startsWith("#") ? originalValue : rgbToHex(originalValue)
    )
    .matches(
      /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      "Invalid color format, only HEX allowed"
    ),
  deadline: yup.string().required("Deadline is required"),
  emoji: yup
    .string()
    .matches(
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
      "Invalid emoji data"
    ),
});
