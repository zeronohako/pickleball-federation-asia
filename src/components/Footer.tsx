import Link from 'next/link'

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="font-bold text-white">Pickleball Federation Asia</h3>
          <p className="mt-2 text-sm">Bringing the sport to communities across Asia.</p>
        </div>

        <div className="text-sm">
          <div><strong>Quick links</strong></div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/membership">Membership</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div>Newsletter</div>
          <form className="mt-2 flex gap-2">
            <input aria-label="Email" type="email" placeholder="you@email.com"
              className="px-3 py-2 min-w-[200px] rounded bg-white text-black" />
            <button className="px-3 py-2 rounded bg-emerald-600 text-white">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-xs text-center">
        © {new Date().getFullYear()} Pickleball Federation Asia — All rights reserved.
      </div>
    </footer>
  )
}
