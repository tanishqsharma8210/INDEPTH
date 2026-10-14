import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "INDEPTH | Learn through connected journeys",
    template: "%s | INDEPTH",
  },
  description:
    "A thoughtful learning platform for exploring the ideas, discoveries, and stories that shape our world.",
  metadataBase: new URL("https://indepth-learning.vercel.app"),
  openGraph: {
    title: "INDEPTH | Learn through connected journeys",
    description: "Explore knowledge through thoughtful, connected learning journeys.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col overflow-x-hidden">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
