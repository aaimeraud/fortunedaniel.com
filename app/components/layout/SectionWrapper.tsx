export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-3 md:p-5 h-svh ">{children}</section>;
}
