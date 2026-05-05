import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { assertSupabaseConfig } from "./config";

export function createSupabaseServerComponentClient() {
  const { supabaseUrl, supabaseAnonKey } = assertSupabaseConfig();
  const cookieStore = cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll() {
        // Server Components cannot persist cookies directly.
      },
    },
  });
}