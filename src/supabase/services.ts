import { UserRegisteration } from "../components/shared/types";
import supabase from "./index";

export async function logInUser(email: string, password: string) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
}

export async function REGISTER_USER(data: UserRegisteration) {
  const response = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: "http://localhost:5173/login", //
    },
  });
  return response;
}

export async function GET_USER() {
  return await supabase.auth.getUser();
}

export async function GET_PROJECTS() {
  const { data: projects, error } = await supabase.from("projects").select(`
  *, tasks (
    *
  )
`);

  if (error) {
    throw error;
  }

  return projects;
}

export async function GET_PROJECT(id: string) {
  const { data: project, error } = await supabase
    .from("projects")
    .select(" *, tasks(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }
  return project;
}

export async function GET_TASKS() {
  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*, project:projects (id, name, status)");
  if (error) {
    throw error;
  }

  return tasks;
}
