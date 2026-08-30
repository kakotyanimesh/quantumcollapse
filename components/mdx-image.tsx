import fs from "fs";
import path from "path";
import NextImage from "next/image";
import { imageSize } from "image-size";

export interface MdxImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

const FALLBACK_WIDTH = 1200;
const FALLBACK_HEIGHT = 675;

function getLocalDimensions(src: string) {
  try {
    const filePath = path.join(process.cwd(), "public", src);
    const buffer = fs.readFileSync(filePath);
    const { width, height } = imageSize(buffer);
    if (width && height) return { width, height };
  } catch {
    // File missing, unreadable, or not a recognized image format —
    // fall back to default dimensions below instead of crashing the build.
  }
  return null;
}

/**
 * Optimized image renderer for MDX content (notes, blog, schedule).
 *
 * - Local images (path starting with "/", served from `public/`) are read
 *   from disk to auto-detect real width/height, then rendered through
 *   `next/image` for optimization, lazy-loading, and layout-shift-free sizing.
 * - Remote images (http/https) fall back to a plain `<img>` since
 *   `next/image` requires the domain to be allow-listed in `next.config.ts`.
 *
 * Usage in MDX:
 *   ![Alt text](/images/blog/my-post/photo.jpg)   — plain markdown, auto-optimized
 *   <Image src="/images/..." alt="..." caption="Optional caption" />
 */
export function MdxImage({ src, alt, caption, priority }: MdxImageProps) {
  const isRemote = /^https?:\/\//.test(src);
  const dimensions = isRemote ? null : getLocalDimensions(src);

  return (
    <figure className="my-8">
      {isRemote ? (
        // eslint-disable-next-line @next/next/no-img-element -- unoptimized remote fallback
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full rounded-lg border border-border"
        />
      ) : (
        <NextImage
          src={src}
          alt={alt}
          width={dimensions?.width ?? FALLBACK_WIDTH}
          height={dimensions?.height ?? FALLBACK_HEIGHT}
          priority={priority}
          sizes="(min-width: 672px) 672px, 100vw"
          className="w-full rounded-lg border border-border"
        />
      )}
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
