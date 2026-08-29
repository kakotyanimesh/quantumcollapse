import Link from "next/link";

const links = [
  { href: "/notes", label: "Notes" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-foreground"
        >
          Quantumcollapse
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
