import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavbarMenu } from "@/components/navbar-menu"
import { ThemeToggle } from "@/components/theme-toggle-enhanced"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suraj E M - Software Developer & AI Expert",
  description: "Personal portfolio of Suraj E M - Software Developer and AI Agent Automator with AI & ML Expertise",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavbarMenu />
          <ThemeToggle />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
