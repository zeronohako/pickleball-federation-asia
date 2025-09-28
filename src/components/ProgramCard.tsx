// components/ProgramCard.tsx
export default function ProgramCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  )
}
