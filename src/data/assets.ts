export function resolvePublicAssetUrl(src: string) {
  if (/^(https?:|data:|blob:)/.test(src)) {
    return src;
  }

  const normalizedPath = src.replace(/^\//, "");

  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}
