import { supabaseServer } from "$lib/supabaseServer";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { data, error } = await supabaseServer
    .from("testing")
    .select();

  if (error) {
    console.error("Supabase error:", error);
    return { testing: [] };
  }

  return {
    testing: data ?? [],
  };
};