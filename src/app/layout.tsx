import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { Analytics } from "@/components/analytics/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
