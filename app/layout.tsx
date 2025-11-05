import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ClientSessionProvider } from "./providers/ClientSessionProvider";

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeadsParser",
  description: "Lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains_mono.variable}>
        <ClientSessionProvider>{children}</ClientSessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
