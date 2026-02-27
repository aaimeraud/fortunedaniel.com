export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-2 h-screen ">{children}</section>;
}
