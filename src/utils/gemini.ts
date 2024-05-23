import { GoogleGenerativeAI } from "@google/generative-ai";

export const GEMINI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

const model = GEMINI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export async function ASK_GEMINI({
  title,
  description,
  alreadyIncluded,
}: {
  title?: string;
  description?: string;
  alreadyIncluded?: string;
}) {
  if (!title || !description) {
    throw "Project must have title and description";
  }

  const res = await model.generateContent(
    `Given a project title and description, suggest list of tasks. Title: ${title} Description: ${description}. ${
      alreadyIncluded
        ? "This are already included, so skip them. " + alreadyIncluded
        : ""
    } Task format is {task: string, description: string}. MIN=5, MAX=8`
  );

  const data = await res.response;
  const text = data.text();

  const decoded = JSON.parse(text);

  if (decoded?.tasks?.length || decoded.length) {
    return decoded?.tasks || decoded;
  } else throw "Could not decode result";
}
