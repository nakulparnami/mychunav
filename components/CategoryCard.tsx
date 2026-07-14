import type { Category } from "@/lib/mock-data";

// This component receives a `category` object as a "prop" — data passed
// in from whoever uses this component (in our case, app/page.tsx).
// That's what lets us reuse this ONE component for all 6 categories.
export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="ballot-perforation overflow-hidden rounded-b-lg border border-t-0 border-ink/10 bg-white shadow-sm">
      <div className="p-6">
        <p className="font-body text-xs uppercase tracking-wider text-ink/50">
          {category.title}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-ink">
          {category.tagline}
        </h3>

        <ul className="mt-5 space-y-3">
          {category.items.map((item) => (
            <li key={item.rank} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marigold font-mono text-xs font-medium text-ink">
                {item.rank}
              </span>
              <span className="flex-1 font-body text-sm text-ink">
                {item.name}
              </span>
              <span className="font-mono text-xs text-ink/50">
                {item.votes.toLocaleString("en-IN")} votes
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-5 inline-block font-body text-sm font-medium text-banyan hover:underline"
        >
          See full ranking →
        </a>
      </div>
    </div>
  );
}
