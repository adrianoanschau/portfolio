/** Resolve a file from `public/` against Vite's GitHub Pages base (`/portfolio/`). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${path.replace(/^\//, '')}`;
}
