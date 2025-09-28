// app/events/page.tsx
import { getAllEvents, getCountries } from '../../lib/events'
import EventFilters from '@/components/EventFilters'
import EventList from '@/components/EventList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events — Pickleball Federation Asia',
  description: 'Upcoming pickleball events across Asia — tournaments, community cups, and training.'
}

export default function EventsPage() {
  const events = getAllEvents()
  const countries = getCountries()

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="mt-2 text-sm text-slate-600">Find upcoming tournaments, community events, and training across Asia.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-72">
          {/* Client filter controls */}
          <EventFilters countries={countries} />
        </aside>

        <div className="flex-1">
          {/* Client-side list (it accepts the static events as initial prop) */}
          <EventList initialEvents={events} />
        </div>
      </div>
    </div>
  )
}
