import Link from "next/link";
import type { Metadata } from "next";
import { getAllMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes — Animesh",
  description: "Physics notes, organized by topic.",
};

export default function NotesPage() {
  const notes = getAllMeta("notes");
  const topics = Array.from(
    new Set(notes.map((n) => n.topic ?? "General")),
  );

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <h1 className="font-heading text-3xl tracking-tight text-foreground">
        Notes
      </h1>
      <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
        Written up as I work through each topic. Not polished — just clear
        enough that future me can pick them back up.
      </p>

      {notes.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          Nothing here yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 space-y-10">
          {topics.map((topic) => (
            <section key={topic}>
              <h2 className="font-heading text-sm tracking-wide text-muted-foreground uppercase">
                {topic}
              </h2>
              <ul className="mt-3 divide-y divide-border">
                {notes
                  .filter((n) => (n.topic ?? "General") === topic)
                  .map((note) => (
                    <li key={note.slug}>
                      <Link
                        href={`/notes/${note.slug}`}
                        className="group flex items-baseline justify-between gap-4 py-3"
                      >
                        <span>
                          <span className="text-foreground transition-colors group-hover:text-primary">
                            {note.title}
                          </span>
                          {note.description && (
                            <span className="mt-0.5 block text-sm text-muted-foreground">
                              {note.description}
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {note.readingMinutes} min
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
