import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jumia Similar script in Next.js",
  description: "Jumia Similar script in Next.js TypeScript Tailwindcss Node.js MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fe9801]">
        {children}
      </body>
    </html>
  );
}
