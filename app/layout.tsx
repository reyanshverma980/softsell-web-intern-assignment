import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat/chat-widget";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoftSell - Software License Resale Made Easy",
  description:
    "SoftSell helps businesses sell unused software licenses quickly and at the best price. Upload, get valued, get paid.",
  keywords:
    "software resale, license resale, software license marketplace, sell software licenses",
  openGraph: {
    title: "SoftSell - Software License Resale Made Easy",
    description:
      "SoftSell helps businesses sell unused software licenses quickly and at the best price. Upload, get valued, get paid.",
    url: "https://softsell-liard-rho.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/SoftSell - Simplifying Software Resale.png",
        width: 1200,
        height: 630,
        alt: "SoftSell - Software License Resale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
