import Link from 'next/link'

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-[url('/images/hero-court.jpg')] bg-cover bg-center text-white">
      <div className="bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <h1 className="text-4xl md:text-6xl font-extrabold">Unite for Pickleball in Asia</h1>
          <p className="mt-4 text-lg max-w-xl">Events, coach education, and community programs to grow the sport across the region.</p>
          <div className="mt-6 flex gap-4">
            <Link href="/events" className="px-4 py-2 bg-white text-black rounded">Discover Events</Link>
            <Link href="/membership" className="px-4 py-2 border border-white rounded">Become a Member</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
