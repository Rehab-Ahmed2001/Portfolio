import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Rehab's Portfolio",
  description:
    "Personal portfolio built with Next.js and Tailwind CSS showcasing my projects, technical skills, and experience as a Front-End Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${jetbrainsMono.className} antialiased`}>
        <Header />
        <StairTransition/>
        <PageTransition></PageTransition>
        {children}
      </body>
    </html>
  );
}
