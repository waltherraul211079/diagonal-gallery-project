import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientBody from "./ClientBody"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Silva Hair Extensions - Extensiones de Cabello Premium",
  description: "Especialistas en extensiones de cabello de alta calidad. Ofrecemos servicios profesionales de Butterfly Welf, Invisible Welf Slim, Toppers y más.",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body suppressHydrationWarning className="antialiased" style={{fontFamily: 'Arial, sans-serif'}}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}
