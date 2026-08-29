import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getAllSlugs, getItem } from "@/lib/content";
import { MdxContent } from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("notes").map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/notes/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const note = getItem("notes", slug);
  if (!note) return {};
  return {
    title: `${note.title} — Animesh`,
    description: note.description,
  };
}

export default async function NotePage(props: PageProps<"/notes/[slug]">) {
  const { slug } = await props.params;
  const note = getItem("notes", slug);
  if (!note) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/notes"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Notes
      </Link>

      <header className="mt-6">
        {note.topic && (
          <p className="text-xs tracking-wide text-muted-foreground uppercase">
            {note.topic}
          </p>
        )}
        <h1 className="font-heading mt-2 text-3xl tracking-tight text-foreground">
          {note.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {note.readingMinutes} min read
        </p>
      </header>

      <article className="mt-10">
        <MdxContent source={note.content} />
      </article>
    </main>
  );
}
