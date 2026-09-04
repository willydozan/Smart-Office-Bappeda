import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-KANJOLI Smart Office",
  description: "Smart Office Bappeda & Litbang Kabupaten Banggai Kepulauan",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
