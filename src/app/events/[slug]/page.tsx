// app/events/[slug]/page.tsx
import { getAllEventSlugs, getEventBySlug } from '@/lib/events'
import Image from 'next/image'
import EventSchedule from '@/components/EventSchedule'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllEventSlugs()
  return slugs.map(s => ({ slug: s }))
}

export default function EventDetail({ params }: Props) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold">Event not found</h2>
        <p className="mt-2 text-slate-600">We couldn't find that event.</p>
      </div>
    )
  }

  const start = new Date(event.date)
  const dateStr = start.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {event.featuredImage && (
        <div className="relative h-64 w-full rounded overflow-hidden shadow-sm mb-6">
          <Image src={event.featuredImage} alt={event.title} fill style={{ objectFit: 'cover' }} />
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <div className="text-sm text-slate-500 mb-6">{dateStr} · {event.city ?? ''} {event.country ? `· ${event.country}` : ''}</div>

      <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: event.description ?? '' }} />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Event details</h3>
          <ul className="text-sm space-y-2">
            <li><strong>Venue:</strong> {event.venue ?? 'TBA'}</li>
            <li><strong>City:</strong> {event.city ?? 'TBA'}</li>
            <li><strong>Country:</strong> {event.country}</li>
            {event.registrationUrl && (
              <li>
                <a className="inline-block mt-2 px-4 py-2 bg-brand-600 text-white rounded" href={event.registrationUrl} target="_blank" rel="noreferrer">Register</a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <EventSchedule event={event} />
        </div>
      </div>
    </article>
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const event = getEventBySlug(params.slug)
  if (!event) {
    return { title: 'Event not found' }
  }
  return {
    title: `${event.title} — Events`,
    description: event.excerpt ?? `Event in ${event.country}`
  }
}
