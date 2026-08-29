import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getAllSlugs, getItem } from "@/lib/content";
import { MdxContent } from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getItem("blog", slug);
  if (!post) return {};
  return {
    title: `${post.title} — Animesh`,
    description: post.description,
  };
}

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">,
) {
  const { slug } = await props.params;
  const post = getItem("blog", slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Blog
      </Link>

      <header className="mt-6">
        <h1 className="font-heading text-3xl tracking-tight text-foreground">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {post.date} · {post.readingMinutes} min read
        </p>
      </header>

      <article className="mt-10">
        <MdxContent source={post.content} />
      </article>
    </main>
  );
}
