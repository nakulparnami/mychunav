export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-display text-2xl font-semibold tracking-tight text-ink">
          MyChunav
        </span>
        <div className="flex items-center gap-6 font-body text-sm text-ink/70">
          <a href="#" className="hover:text-ink">
            Discover
          </a>
          <a href="#" className="hover:text-ink">
            Create a Ranking
          </a>
          <a
            href="#"
            className="rounded-full bg-ink px-4 py-2 text-paper hover:bg-ink/90"
          >
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
}
