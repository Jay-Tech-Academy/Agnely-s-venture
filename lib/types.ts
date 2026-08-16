export type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  stock: number;
  image_url: string;
  description: string | null;
  active?: boolean;
  created_at?: string;
};

export type ProductInput = Omit<Product, "id" | "created_at">;