import { Lora, DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const fontHeading = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Backup / display font, carried over from the porikhyaaxom design system.
export const fontArray = localFont({
  src: "../app/fonts/Array-Regular.otf",
  variable: "--font-array",
  display: "swap",
});
