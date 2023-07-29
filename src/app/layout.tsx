import { siteConfig } from "@/core/config/site";
import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import S from "./layout.module.scss";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Server Components", "Server Actions"],
  authors: [
    {
      name: "Jesus Lares Contreras",
      url: "https://github.com/Jesus-Lares",
    },
  ],
  creator: "Jesus-Lares",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "es",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <main className={S.main}>{children}</main>
      </body>
    </html>
  );
}
