import type { Metadata } from "next";
import { fontHeading, fontSans, fontMono, fontArray } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animesh",
  description: "Physics notes, blogs, and learning resources.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} ${fontArray.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Nav />
        <div className="flex flex-1 flex-col pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
