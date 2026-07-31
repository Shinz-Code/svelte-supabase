import { supabaseServer } from "$lib/supabaseServer";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const t0 = performance.now();
  
  // Cek: Apakah delay dari import/module init?
  const t1 = performance.now();
  
  const { data, error } = await supabaseServer
    .from("testing")
    .select();
  
  const t2 = performance.now();
  
  if (error) {
    console.error("Supabase error:", error);
    return { testing: [], timing: { total: 0, query: 0, init: 0 } };
  }

  const t3 = performance.now();
  
  const timing = {
    init: Math.round(t1 - t0),      // waktu import/init
    query: Math.round(t2 - t1),     // waktu query ke Supabase
    total: Math.round(t3 - t0),     // total load function
  };
  
  console.log("⏱️ TIMING:", JSON.stringify(timing));

  return {
    testing: data ?? [],
    timing, // kirim ke client juga biar bisa lihat di browser
  };
};
