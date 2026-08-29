import Link from "next/link";
import { GithubIcon, InstagramIcon } from "@/components/icons";

const socials = [
  {
    href: "https://github.com/kakotyanimesh",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://instagram.com/_animeshkakoty",
    label: "Instagram",
    icon: InstagramIcon,
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 py-8 text-center text-sm text-muted-foreground">
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <social.icon className="size-4" />
          </a>
        ))}
      </div>
      <Link href="/schedule">@animesh {new Date().getFullYear()}</Link>
    </footer>
  );
}
