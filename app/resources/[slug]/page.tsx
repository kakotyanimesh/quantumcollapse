import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getResourceSubject, resourceSubjects } from "@/lib/resources";

export function generateStaticParams() {
  return resourceSubjects.map((subject) => ({ slug: subject.slug }));
}

export async function generateMetadata(
  props: PageProps<"/resources/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const subject = getResourceSubject(slug);
  if (!subject) return {};
  return {
    title: `${subject.title} resources — Animesh`,
  };
}

export default async function ResourceSubjectPage(
  props: PageProps<"/resources/[slug]">,
) {
  const { slug } = await props.params;
  const subject = getResourceSubject(slug);
  if (!subject) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/resources"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Resources
      </Link>

      <h1 className="font-heading mt-6 text-3xl tracking-tight text-foreground">
        {subject.title}
      </h1>

      <div className="mt-10 space-y-10">
        {subject.categories.map((category) => (
          <section key={category.label}>
            <h2 className="font-heading text-sm tracking-wide text-muted-foreground uppercase">
              {category.label}
            </h2>
            <ul className="mt-3 divide-y divide-border">
              {category.items.map((item) => (
                <li key={item.href} className="py-3">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
                  >
                    {item.title}
                  </a>
                  {item.note && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
