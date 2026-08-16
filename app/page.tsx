import { createClient } from "@/lib/supabase/server";
import Storefront from "@/components/Storefront";

export const revalidate = 0;

export default async function Home() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("id,title,category,price,stock,image_url,description")
    .eq("active", true)
    .order("created_at", { ascending: false });

  return <Storefront products={error ? [] : products ?? []} />;
}