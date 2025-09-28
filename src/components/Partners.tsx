// components/Partners.tsx
import Image from 'next/image'

export default function Partners({ partners }: { partners: Array<{ name: string; logo?: string; url?: string }> }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
      {partners.map(p => (
        <a key={p.name} href={p.url ?? '#'} className="flex items-center justify-center p-3 bg-white border rounded hover:shadow-sm" target={p.url ? '_blank' : undefined} rel="noreferrer">
          {p.logo ? (
            <div className="relative h-12 w-32">
              <Image src={p.logo} alt={p.name} fill style={{ objectFit: 'contain' }} />
            </div>
          ) : (
            <div className="text-sm">{p.name}</div>
          )}
        </a>
      ))}
    </div>
  )
}
