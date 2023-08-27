
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/headFoot/Header";
import Footer from "@/headFoot/Footer";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "recipe.uz",
  description: "site of recipe.uz in uzb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <div className={roboto.className} >
      <Header />
      <main className="min-h-50vh">{children}</main>
      <Footer />
    </div>
  );
}
