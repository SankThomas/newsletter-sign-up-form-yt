import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Newsletter Sign Up Form With Success Message",
  description: "Frontend Mentor | Newsletter Sign Up Form With Success Message",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
