import type { Metadata } from "next";
import { fonts } from "@/shared/lib";
import "./_styles/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "My page",
  description: "Hello world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={fonts.montserrat.className}>{children}</body>
    </html>
  );
}
