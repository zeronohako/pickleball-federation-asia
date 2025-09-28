// app/layout.tsx
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Pickleball Federation Asia',
  description: 'Growing pickleball across Asia — events, training, membership.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
