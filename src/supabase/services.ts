import supabase from "./index";

export async function logInUser(email: string, password: string) {
  const user = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return user;
}
