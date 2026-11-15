import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Fadhil Risandi — Front-End Developer",
  description:
    "Portofolio Andi Fadhil Risandi Kresna, Front-End Developer & UI/UX Enthusiast dari Makassar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={quicksand.variable}>{children}</body>
    </html>
  );
}
