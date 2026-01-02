import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { MegaMenu } from "@/components/navigation/MegaMenu"
import { Footer } from "@/components/layout/Footer"
import { ClientLayout } from "@/components/layout/ClientLayout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "West Levy Creative",
  description: "We build visibility engines for brands who move culture forward",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        <ClientLayout>
          <div className="min-h-screen flex flex-col bg-background">
            <MegaMenu />
            <main className="flex-1 pt-[73px]">
              {children}
            </main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}
