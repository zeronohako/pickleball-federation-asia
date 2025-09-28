// components/Header.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-text">Pickleball Federation Asia</Link>

        <nav className="hidden md:flex gap-6 items-center text-sm text-muted">
          <Link href="/about">About</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/events">Events</Link>
          <Link href="/news">News</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact" className="ml-4 px-4 py-2 bg-emerald-600 text-white rounded">Join</Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/membership" className="block py-2">Membership</Link>
          <Link href="/events" className="block py-2">Events</Link>
          <Link href="/news" className="block py-2">News</Link>
          <Link href="/gallery" className="block py-2">Gallery</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </header>
  )
}
