import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { resourceSubjects } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources — Animesh",
  description: "Learning resources, organized by subject.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <h1 className="font-heading text-3xl tracking-tight text-foreground">
        Resources
      </h1>
      <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
        A running list of learning resources, organized by subject. Added as I
        find them.
      </p>

      <ul className="mt-10 divide-y divide-border">
        {resourceSubjects.map((subject) => {
          const count = subject.categories.reduce(
            (sum, c) => sum + c.items.length,
            0,
          );
          return (
            <li key={subject.slug}>
              <Link
                href={`/resources/${subject.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="text-foreground transition-colors group-hover:text-primary">
                  {subject.title}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                  {count} link{count === 1 ? "" : "s"}
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
