import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Forensic Lab",
  description: "Forensic Lab SPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body cz-shortcut-listen="true">
        <Theme accentColor="indigo">
          {children}
        </Theme>
      </body>
    </html>
  );
}
