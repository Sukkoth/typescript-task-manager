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
