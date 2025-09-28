// app/page.tsx
import Hero from '../components/Hero'
import ProgramCard from '../components/ProgramCard'
import EventCard from '../components/EventCard'
import events from '@/data/events.json'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold mb-6">Our Key Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgramCard title="Coach Training" desc="Certification & workshops for coaches and referees." />
          <ProgramCard title="Grants & Equipment" desc="Support for new clubs & underserved communities." />
          <ProgramCard title="Youth Development" desc="School initiatives & junior programs." />
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <a className="text-sm underline" href="/events">View all events</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 6).map(e => <EventCard key={e.slug} event={e} />)}
          </div>
        </div>
      </section>
    </>
  )
}
