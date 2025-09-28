// app/about/page.tsx
import MissionBlock from '@/components/MissionBlock'
import TeamGrid from '@/components/TeamGrid'
import Partners from '@/components/Partners'
import people from '@/data/people.json'
import partners from '@/data/partners.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Pickleball Federation Asia',
  description: 'About Pickleball Federation Asia — mission, leadership, partners, and history.'
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">About Pickleball Federation Asia</h1>
        <p className="mt-2 text-sm text-slate-600">We support growth, capacity building, and events across the Asian continent.</p>
      </header>

      <MissionBlock
        mission="Grow pickleball across Asia through inclusive events, coach education, and federation support."
        vision="An active, connected pickleball community across every country in Asia."
      />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
        <TeamGrid members={people} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
        <Partners partners={partners} />
      </section>

      <section className="mt-12 bg-surface p-6 rounded">
        <h3 className="text-xl font-semibold mb-2">A short history</h3>
        <p className="text-sm text-slate-700">
          Pickleball Federation Asia was formed to coordinate development across the region, bringing together national bodies,
          clubs, and volunteers to share resources and host inclusive events. Since our founding, we&apos;ve supported coach education,
          equipment grants, and the growth of national federations.
        </p>
      </section>
    </div>
  )
}
