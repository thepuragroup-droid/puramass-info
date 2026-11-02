import { protocolSlugs } from "./protocols";
import { blendProtocolSlugs } from "./blendProtocols";

/**
 * Every internal page that actually exists. Links to anything else would 404,
 * so menus, footers and "related" lists filter through `isLiveHref`. When you
 * add a new top-level page (e.g. a guide or legal page), register it here and
 * any links already pointing at it will start showing up automatically.
 */
const staticRoutes = ["/", "/calculator", "/single-peptide-dosages", "/peptide-blend-dosages"];

export const liveRoutes: ReadonlySet<string> = new Set([
  ...staticRoutes,
  ...protocolSlugs.map((s) => `/single-peptide-dosages/${s}`),
  ...blendProtocolSlugs.map((s) => `/peptide-blend-dosages/${s}`),
]);

/** True for external URLs and for internal paths that resolve to a real page. */
export function isLiveHref(href: string): boolean {
  if (!href.startsWith("/")) return true;
  const path = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return liveRoutes.has(path);
}

export function liveLinks<T extends { href: string }>(links: T[]): T[] {
  return links.filter((l) => isLiveHref(l.href));
}
