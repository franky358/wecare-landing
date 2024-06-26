// src/app/layout.tsx
import "../../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Importar diferentes pesos
  display: "swap",
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <Header isHome={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
