import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate DMs and comments on Instagram",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}

export default RootLayout
