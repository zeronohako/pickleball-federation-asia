// components/TeamGrid.tsx
import PersonCard from './PersonCard'

export default function TeamGrid({ members }: { members: Array<{ name: string; role: string; bio?: string; photo?: string; country?: string; email?: string }> }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((m) => (
        <PersonCard key={m.name} person={m} />
      ))}
    </div>
  )
}
