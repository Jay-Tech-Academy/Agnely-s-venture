import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGNELY's VENTURE | Fashion & Fabrics",
  description:
    "Women's fabrics, gowns, handbags, shoes and accessories from AGNELY's VENTURE.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}