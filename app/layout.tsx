import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mistral.ai Quick Chat",
  description:
    "Have a quick chat with Mistral.ai. Not affiliated with Mistral.ai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex justify-center items-center h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
