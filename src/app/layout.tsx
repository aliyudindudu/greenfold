import type { Metadata } from "next";
import { Saira_Stencil_One, Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stencil",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GreenFold | Reimagining Waste into Wonder",
  description: "Handmade, upcycled cardboard crafts for furniture, home decor, and toys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(sairaStencil.variable, spaceMono.variable, "antialiased")}>
        <div className="texture-grain" />
        {children}
      </body>
    </html>
  );
}
