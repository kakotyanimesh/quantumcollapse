import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllMeta } from "@/lib/content";

export default function Home() {
  const recentNotes = getAllMeta("notes").slice(0, 3);
  const recentPosts = getAllMeta("blog").slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <section
        style={{ "--enter-index": 0 } as React.CSSProperties}
        className="content-enter"
      >
        <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
          Quantumcollapse
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Hi, I am a physics student , this will be my place to share my
          resources, notes and blog posts. I have a keen interest in physics and
          building web apps , that&apos;s why this platform. <br /> Thank you
        </p>
      </section>

      {recentNotes.length > 0 && (
        <section
          style={{ "--enter-index": 1 } as React.CSSProperties}
          className="content-enter mt-14"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="font-heading text-lg tracking-tight text-foreground">
              Recent notes
            </h2>
            <Link
              href="/notes"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All notes <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <ul className="mt-5 divide-y divide-border">
            {recentNotes.map((note) => (
              <li key={note.slug}>
                <Link
                  href={`/notes/${note.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="text-foreground transition-colors group-hover:text-primary">
                    {note.title}
                  </span>
                  {note.topic && (
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {note.topic}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {recentPosts.length > 0 && (
        <section
          style={{ "--enter-index": 2 } as React.CSSProperties}
          className="content-enter mt-12"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="font-heading text-lg tracking-tight text-foreground">
              From the blog
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All posts <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <ul className="mt-5 divide-y divide-border">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
