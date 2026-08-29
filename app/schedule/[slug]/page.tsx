import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getAllSlugs, getItem } from "@/lib/content";
import { MdxContent } from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("schedule").map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/schedule/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const schedule = getItem("schedule", slug);
  if (!schedule) return {};
  return {
    title: `${schedule.title} — Animesh`,
    description: schedule.description,
    robots: { index: false, follow: false },
  };
}

export default async function SchedulePage(
  props: PageProps<"/schedule/[slug]">,
) {
  const { slug } = await props.params;
  const schedule = getItem("schedule", slug);
  if (!schedule) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/schedule"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Schedules
      </Link>

      <header className="mt-6">
        {schedule.topic && (
          <p className="text-xs tracking-wide text-muted-foreground uppercase">
            {schedule.topic}
          </p>
        )}
        <h1 className="font-heading mt-2 text-3xl tracking-tight text-foreground">
          {schedule.title}
        </h1>
      </header>

      <article className="mt-10">
        <MdxContent source={schedule.content} />
      </article>
    </main>
  );
}
