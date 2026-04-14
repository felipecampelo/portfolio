/**
 * Public files under `public/` (e.g. `/assets/...` on disk → `assets/...` here).
 * Honors Astro `base` (GitHub project Pages).
 */
export function assetUrl(pathFromRoot: string): string {
	const base = import.meta.env.BASE_URL;
	const normalized = pathFromRoot.startsWith('/') ? pathFromRoot.slice(1) : pathFromRoot;
	return `${base}${normalized}`;
}

/** For use inside CSS `url(...)`. */
export function cssAssetUrl(pathFromRoot: string): string {
	return `url(${JSON.stringify(assetUrl(pathFromRoot))})`;
}
