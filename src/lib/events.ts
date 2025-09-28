// lib/events.ts
import eventsData from '@/data/events.json'

export type EventItem = {
  title: string
  slug: string
  date: string
  endDate?: string
  country: string
  city?: string
  venue?: string
  excerpt?: string
  description?: string
  featuredImage?: string
  tags?: string[]
  registrationUrl?: string
}

const events: EventItem[] = eventsData as EventItem[]

export function getAllEvents(): EventItem[] {
  // return sorted by date (ascending)
  return [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find(e => e.slug === slug)
}

export function getAllEventSlugs(): string[] {
  return events.map(e => e.slug)
}

export function getCountries(): string[] {
  const set = new Set(events.map(e => e.country).filter(Boolean))
  return Array.from(set).sort()
}
