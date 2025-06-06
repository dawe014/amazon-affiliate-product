import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
  title: "Amazon's Best Fashion Deals",
  description:
    "Shop Amazon’s top-rated fashion items with hand-picked essentials including Crocs, T-shirts, accessories, and more. Curated by Style Essentials.",
  keywords: [
    "Amazon best sellers",
    "fashion deals",
    "crocs",
    "t-shirts",
    "affiliate marketing",
    "nipple covers",
    "style essentials",
    "men's clothing",
    "women's accessories",
  ],
  metadataBase: new URL("https://yourdomain.com"), // 🔁 Replace with your real domain
  authors: [{ name: "Dawit Tamiru", url: "https://yourdomain.com" }],
  creator: "Dawit Tamiru",
  themeColor: "#ffffff",
  openGraph: {
    title: "Style Essentials | Curated Amazon Fashion Picks",
    description:
      "Discover Amazon’s trending fashion picks, curated for style and comfort. Explore Crocs, Gildan tees, Nippies, and more.",
    url: "https://yourdomain.com", // 🔁 Replace with your real domain
    siteName: "Style Essentials",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // 🔁 Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Style Essentials - Amazon Fashion Picks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Amazon Fashion Picks",
    description:
      "Shop trending fashion essentials on Amazon, hand-picked for comfort, style, and value.",
    images: ["https://yourdomain.com/twitter-image.jpg"], // 🔁 Replace with actual image URL
    creator: "@yourhandle", // Optional Twitter handle
  },
  icons: {
    icon: "/vecteezy_shopping-cart-illustration-ai-generative_31611140.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
