import {
  ProjectForm,
  ProjectStatus,
  TaskForm,
  TaskStatus,
  UserRegisteration,
} from "../components/shared/types";
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
      emailRedirectTo: `${import.meta.env.VITE_APP_URL}/login`,
    },
  });
  return response;
}

export async function GET_USER() {
  return await supabase.auth.getUser();
}

export async function GET_PROJECTS(filters: { status?: ProjectStatus }) {
  const query = supabase.from("projects").select(`*, tasks (*)`);

  const { data: projects, error } =
    filters.status !== null
      ? await query.eq("status", filters.status)
      : await query;

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

export async function COMPLETE_TASK({
  id,
  value,
}: {
  id: string;
  value: TaskStatus;
}) {
  const { data: task, error } = await supabase
    .from("tasks")
    .update({ status: value })
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }
  return task;
}

export async function CREATE_TASK(task: TaskForm) {
  const { data, error } = await supabase.from("tasks").insert([task]).select();

  if (error) {
    throw error;
  }
  return data;
}

export async function CREATE_PROJECT(project: {
  formData: ProjectForm;
  user_id: string;
}) {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ user_id: project.user_id, ...project.formData }])
    .select();

  if (error) {
    throw error;
  }
  return data;
}
