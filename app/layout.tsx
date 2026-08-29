import type { Metadata } from "next";
import "./globals.css";
import "./refinements.css";
import "./purple-theme.css";
import "./umang-home.css";

export const metadata: Metadata = { title: "Passport Seva on UMANG", description: "A mobile-first passport reissue companion" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
