import type { Metadata } from "next";
import { fonts } from "@/shared/lib";
import "./_styles/globals.css";
import { Providers } from "./_providers/Providers";
import "./_styles/themes.css";

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
    <html lang='en' suppressHydrationWarning>
      <Providers>
        <body className={fonts.geologica.className}>{children}</body>
      </Providers>
    </html>
  );
}
