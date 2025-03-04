import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import { CartProvider } from "@/lib/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CieCie Gift - Món quà từ trái tim",
  description: "Cửa hàng quà tặng handmade độc đáo",
  metadataBase: new URL('https://cieciegift.vercel.app'),
  openGraph: {
    title: "CieCie Gift - Món quà từ trái tim",
    description: "Cửa hàng quà tặng handmade độc đáo",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CieCie Gift Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CieCie Gift - Món quà từ trái tim",
    description: "Cửa hàng quà tặng handmade độc đáo",
    images: ["/logo.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingContact />
        </CartProvider>
      </body>
    </html>
  )
}

