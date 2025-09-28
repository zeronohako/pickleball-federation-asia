// components/EventCard.tsx
import Image from 'next/image'
import Link from 'next/link'

type Event = {
  title: string
  slug: string
  date: string
  country: string
  city?: string
  excerpt?: string
  featuredImage?: string
}

export default function EventCard({ event }: { event: Event }) {
  const d = new Date(event.date)
  const dateStr = d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  return (
    <article className="bg-white border rounded-lg overflow-hidden shadow-sm">
      {event.featuredImage && (
        <div className="relative h-44 w-full">
          <Image src={event.featuredImage} alt={event.title} fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className="p-4">
        <div className="text-sm text-slate-500">{dateStr} · {event.country}</div>
        <h3 className="font-semibold my-2">{event.title}</h3>
        <p className="text-sm text-slate-600">{event.excerpt}</p>
        <div className="mt-4">
          <Link href={`/events/${event.slug}`} className="text-sm underline">View details</Link>
        </div>
      </div>
    </article>
  )
}
