export default function Section({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-wide my-8">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-ink-300">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
