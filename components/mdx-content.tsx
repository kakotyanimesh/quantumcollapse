import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const components = {
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="font-heading mt-10 mb-4 text-2xl tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="font-heading mt-8 mb-3 text-xl tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="my-4 leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="my-4 list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="my-4 list-decimal space-y-2 pl-6" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="leading-relaxed text-foreground/90" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]",
        props.className,
      )}
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="my-5 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="my-5 border-l-2 border-primary/40 pl-4 text-muted-foreground italic"
      {...props}
    />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="bg-muted" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border-b border-border px-3 py-2 text-left font-heading font-medium text-foreground"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td
      className="border-b border-border px-3 py-2 align-top text-foreground/90"
      {...props}
    />
  ),
  tr: (props: ComponentProps<"tr">) => (
    <tr className="last:[&>td]:border-b-0" {...props} />
  ),
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-physics">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </div>
  );
}
