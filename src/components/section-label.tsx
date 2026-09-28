export function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.25em] text-copper"><span className="font-display text-xl font-semibold tracking-normal text-primary">{number}</span><span className="h-px w-7 bg-primary" />{label}</div>;
}
