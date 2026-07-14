import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16 text-center">
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            What does India actually prefer?
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-ink/60">
            Create rankings, cast your vote, and see what the country
            collectively thinks — on food, movies, sports, brands, and more.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </section>
      </main>
    </>
  );
}
