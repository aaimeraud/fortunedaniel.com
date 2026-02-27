export default function HeroCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return <header className={`gap-4 flex flex-col justify-start text-start items-start  p-2 rounded-xl ${className || ''}`}>
    {children}
  </header>;
}
