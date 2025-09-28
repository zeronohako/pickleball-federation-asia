// components/EventList.tsx
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { EventItem } from '@/lib/events'

export default function EventList({ initialEvents }: { initialEvents: EventItem[] }) {
  const [events, setEvents] = useState<EventItem[]>(initialEvents)
  const [filters, setFilters] = useState<{ country: string; query: string }>({ country: 'All', query: '' })

  useEffect(() => {
    function onFilters(e: Event) {
      const detail = (e as CustomEvent).detail as { country: string; query: string }
      setFilters(detail)
    }
    window.addEventListener('events:filters', onFilters as EventListener)
    return () => window.removeEventListener('events:filters', onFilters as EventListener)
  }, [])

  useEffect(() => {
    const q = filters.query.trim().toLowerCase()
    const filtered = initialEvents.filter(ev => {
      const matchesCountry = filters.country === 'All' || ev.country === filters.country
      const matchesQuery =
        q === '' ||
        ev.title.toLowerCase().includes(q) ||
        (ev.city && ev.city.toLowerCase().includes(q)) ||
        (ev.excerpt && ev.excerpt.toLowerCase().includes(q))
      return matchesCountry && matchesQuery
    })
    setEvents(filtered)
  }, [filters, initialEvents])

  if (!events.length) {
    return <div className="text-sm text-slate-600">No events match your search.</div>
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map(ev => {
        const dateStr = new Date(ev.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
        return (
          <article key={ev.slug} className="bg-white border rounded-lg overflow-hidden shadow-sm">
            {ev.featuredImage && (
              <div className="relative h-40 w-full">
                <Image src={ev.featuredImage} alt={ev.title} fill style={{ objectFit: 'cover' }} />
              </div>
            )}
            <div className="p-4">
              <div className="text-sm text-slate-500">{dateStr} · {ev.country}</div>
              <h3 className="font-semibold my-2">{ev.title}</h3>
              <p className="text-sm text-slate-600">{ev.excerpt}</p>
              <div className="mt-4">
                <Link href={`/events/${ev.slug}`} className="text-sm underline">View details</Link>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
