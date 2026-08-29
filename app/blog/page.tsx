import Link from "next/link";
import type { Metadata } from "next";
import { getAllMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Animesh",
  description: "Occasional writing on physics and learning.",
};

export default function BlogPage() {
  const posts = getAllMeta("blog");

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <h1 className="font-heading text-3xl tracking-tight text-foreground">
        Blog
      </h1>
      <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
        Longer-form thoughts — when I have something worth saying.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          Nothing here yet — check back soon.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-4"
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </span>
                {post.description && (
                  <span className="text-sm text-muted-foreground">
                    {post.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
