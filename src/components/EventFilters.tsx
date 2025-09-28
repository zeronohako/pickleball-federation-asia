// components/EventFilters.tsx
'use client'
import { useState, useEffect } from 'react'

type Props = {
  countries: string[]
}

export default function EventFilters({ countries }: Props) {
  const [country, setCountry] = useState<string>('All')
  const [query, setQuery] = useState<string>('')

  // Expose filters via custom events so the EventList component can pick them up
  useEffect(() => {
    const ev = new CustomEvent('events:filters', { detail: { country, query } })
    window.dispatchEvent(ev)
  }, [country, query])

  return (
    <div className="sticky top-20">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Search</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search events..."
          className="w-full px-3 py-2 rounded border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full px-3 py-2 rounded border">
          <option>All</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mt-4 text-sm text-slate-500">
        <p>Tip: Use the search to find events by name or city.</p>
      </div>
    </div>
  )
}
