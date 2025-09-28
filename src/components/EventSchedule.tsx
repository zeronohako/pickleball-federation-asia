// components/EventSchedule.tsx
import type { EventItem } from '@/lib/events'

export default function EventSchedule({ event }: { event: EventItem }) {
  // Simple schedule placeholder — replace by real schedule structure if available
  const start = new Date(event.date)
  const dateStr = start.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <div className="p-4 border rounded bg-surface">
      <h4 className="font-semibold mb-2">Schedule</h4>
      <div className="text-sm text-slate-700">
        <div><strong>{dateStr}</strong></div>
        <div className="mt-2">09:00 — Registration</div>
        <div>10:00 — Opening Ceremony</div>
        <div>11:00 — Matches begin</div>
      </div>
    </div>
  )
}
