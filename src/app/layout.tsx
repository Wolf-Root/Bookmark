import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import AppThemeProvider from "@/context/AppThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookmark",
  description: "A Simple Bookmark Manager",
  authors: { name: "Wolf Rooot", url: "https://github.com/Wolf-Root" },

  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        url: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <AppThemeProvider>
            <Header />
            {children}
            <ScrollToTop />
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
