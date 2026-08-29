import Link from "next/link";
import type { Metadata } from "next";
import { getAllMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Schedule — Animesh",
  robots: { index: false, follow: false },
};

export default function SchedulePage() {
  const schedules = getAllMeta("schedule");

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <h1 className="font-heading text-3xl tracking-tight text-foreground">
        Schedules
      </h1>

      {schedules.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          Nothing here yet.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-border">
          {schedules.map((schedule) => (
            <li key={schedule.slug}>
              <Link
                href={`/schedule/${schedule.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="text-foreground transition-colors group-hover:text-primary">
                  {schedule.title}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {schedule.topic}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
