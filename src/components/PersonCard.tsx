// components/PersonCard.tsx
import Image from 'next/image'

export default function PersonCard({ person }: { person: { name: string; role: string; bio?: string; photo?: string; country?: string; email?: string } }) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="relative h-44 w-full">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div className="bg-surface h-full w-full" />
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-slate-500">{person.role}</div>
        <h3 className="font-semibold mt-1">{person.name}</h3>
        {person.country && <div className="text-xs text-slate-400 mt-1">{person.country}</div>}
        {person.bio && <p className="mt-3 text-sm text-slate-600">{person.bio}</p>}

        {person.email && (
          <div className="mt-3">
            <a className="text-sm underline" href={`mailto:${person.email}`}>Contact</a>
          </div>
        )}
      </div>
    </div>
  )
}
