import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";
import ScrollProgressBar from "@/component/common/ScrollProgressBar";
import ChatWidget from "@/component/chat/ChatWidget";
import PreLoader from "@/component/common/Loader";
import SocialSidebar from "@/component/common/SocialSidebar";

// 1. Global Metadata Configuration
export const metadata = {
  metadataBase: new URL("https://yourportfolio.com"), // CRITICAL: Replace with your domain
  title: {
    default: "Robiul Islam Ashiq | Full Stack Developer",
    template: "%s | Robiul Islam Ashiq", // This automatically appends your name to subpages
  },
  description: "High-performance MERN stack developer specializing in Next.js, React, and scalable web architectures.",
  applicationName: "Ashiq Portfolio",
  authors: [{ name: "Robiul Islam Ashiq" }],
  generator: "Next.js",
  keywords: ["MERN Stack", "Next.js Developer", "React Portfolio", "Full Stack Developer Bangladesh"],
  referrer: "origin-when-cross-origin",
  creator: "Robiul Islam Ashiq",
  publisher: "Robiul Islam Ashiq",
  
  // Global OpenGraph fallback
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Robiul Islam Ashiq Portfolio",
    images: [
      {
        url: "/images/og-main.jpg", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Robiul Islam Ashiq Portfolio",
      },
    ],
  },

  // Search Engine Robot settings
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <PreLoader>
        <SocialSidebar />
        <ScrollProgressBar />
        <ChatWidget />
        <Navbar />
        {/* Use <main> here if you want it to wrap all pages, or keep it simple */}
        {children}
        <Footer />

      </PreLoader>
      </body>
    </html>
  );
}