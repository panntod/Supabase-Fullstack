"use server";

import { redirect } from "next/navigation";
import createSupabaseServerClient from "../supabase/server";

export const readUserSession = async () => {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
};

export const handleLogout = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return redirect("/auth");
};
