import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { Section } from "@/components/site/Section";

export function CategoryGrid() {
  return (
    <Section id="categories">
      <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Shop by interest
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            What are you looking for?
          </h2>
        </div>
        <Link
          href="/locations"
          className="inline-flex items-center gap-2 self-start text-sm font-bold underline-offset-4 hover:underline sm:self-auto"
        >
          Explore these categories in-store
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </Section>
  );
}
