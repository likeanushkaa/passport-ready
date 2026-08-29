import type { ButtonHTMLAttributes } from "react";

/** Lightweight, shadcn-compatible button primitive for future shared actions. */
export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-digilocker-600 disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props} />;
}
