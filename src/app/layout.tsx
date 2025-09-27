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
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsentComponent from "@/components/CookieConsentComponent";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookmark | Simple and Efficient Bookmark Manager",
  description:
    "Bookmark is a simple and efficient bookmark manager to organize, save, and access your favorite links easily.",
  authors: { name: "Wolf Root", url: "https://github.com/Wolf-Root" },

  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/favicon/site.webmanifest",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Bookmark | Simple Bookmark Manager",
    description: "Organize, save, and access your favorite links easily with Bookmark.",
    url: "https://wolf-bookmark.vercel.app/",
    siteName: "Bookmark",
    images: [
      {
        url: "https://wolf-bookmark.vercel.app/Facebook-OG.png",
        width: 1200,
        height: 630,
        alt: "Bookmark Manager Preview",
      },
    ],
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Bookmark | Simple Bookmark Manager",
    description: "Organize, save, and access your favorite links easily with Bookmark.",
    images: ["https://wolf-bookmark.vercel.app/twitter-OG.png"],
    creator: "@wolf_R00T",
  },
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
            <CookieConsentComponent />
            <ScrollToTop />
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('consent', 'default', {
                    ad_storage: 'denied',
                    analytics_storage: 'denied'
                  });
                `,
              }}
            />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          </>
        )}
      </body>
    </html>
  );
}
