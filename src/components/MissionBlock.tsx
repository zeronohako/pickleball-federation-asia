// components/MissionBlock.tsx
export default function MissionBlock({ mission, vision }: { mission: string; vision?: string }) {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center bg-white p-6 rounded shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold">Our mission</h2>
        <p className="mt-3 text-sm text-slate-700">{mission}</p>
        {vision && (
          <>
            <h3 className="mt-4 font-semibold">Vision</h3>
            <p className="text-sm text-slate-700 mt-1">{vision}</p>
          </>
        )}
      </div>

      <div className="h-48 md:h-40 w-full rounded overflow-hidden bg-[url('/images/hero-asian-court.jpg')] bg-cover bg-center" role="img" aria-label="Players on a pickleball court" />
    </section>
  )
}
