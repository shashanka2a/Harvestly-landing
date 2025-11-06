import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harvestly - Fresh from the farm. Direct to your community.",
  description: "Harvestly connects your community directly with a trusted network of local farmers. Get truly fresh produce and support a fair food system.",
  keywords: ["local farmers", "fresh produce", "community supported agriculture", "farm to table", "sustainable food"],
  authors: [{ name: "Harvestly" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Harvestly - Fresh from the farm. Direct to your community.",
    description: "Harvestly connects your community directly with a trusted network of local farmers. Get truly fresh produce and support a fair food system.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvestly - Fresh from the farm. Direct to your community.",
    description: "Harvestly connects your community directly with a trusted network of local farmers. Get truly fresh produce and support a fair food system.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${manrope.variable} antialiased`} style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

