import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentKind = "notes" | "blog" | "schedule";

export interface ContentMeta {
  slug: string;
  title: string;
  description?: string;
  date: string;
  topic?: string;
  tags?: string[];
  readingMinutes: number;
}

export interface ContentItem extends ContentMeta {
  content: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

function dirFor(kind: ContentKind) {
  return path.join(CONTENT_ROOT, kind);
}

function slugsFor(kind: ContentKind): string[] {
  const dir = dirFor(kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllMeta(kind: ContentKind): ContentMeta[] {
  const items = slugsFor(kind).map((slug) => getItem(kind, slug));
  return items
    .filter((item): item is ContentItem => item !== null)
    .map(
      ({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        content,
        ...meta
      }) => meta,
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getItem(kind: ContentKind, slug: string): ContentItem | null {
  const filePath = path.join(dirFor(kind), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description,
    date: data.date ?? "",
    topic: data.topic,
    tags: data.tags ?? [],
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    content,
  };
}

export function getAllSlugs(kind: ContentKind): string[] {
  return slugsFor(kind);
}
