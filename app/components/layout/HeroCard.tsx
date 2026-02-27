export default function HeroCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return <header className={`gap-4 flex flex-col justify-start text-start items-start  p-5 md:p-10  ${className || ''}`}>
    {children}
  </header>;
}
