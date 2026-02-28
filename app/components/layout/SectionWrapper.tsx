export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-3 md:p-5 h-svh " title="This is a wrapper. It contains the content of the page and is here for design purposes. It allows rounded borders.">{children}</section>;
}
