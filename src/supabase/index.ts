import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ibnurrqfjwiasgyzgycm.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
if (!supabaseKey) throw new Error("Supabase keys not found");

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
