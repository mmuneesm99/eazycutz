export function publicPath(pathname: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return basePath ? `${basePath}${normalized}` : normalized;
}

