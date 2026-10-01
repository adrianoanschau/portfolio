/** Resolve um arquivo de `public/` contra a `base` do Vite (`/`). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${path.replace(/^\//, '')}`;
}
