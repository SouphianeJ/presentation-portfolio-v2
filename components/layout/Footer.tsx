export default function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="container-wide py-8 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} — Portfolio pédagogique & tech.
      </div>
    </footer>
  );
}
