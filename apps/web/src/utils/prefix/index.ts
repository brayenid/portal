export function addPrefix(path?: string): string {
  if (!path) {
    return "";
  }
  const defaultPrefix = process.env.NEXT_PUBLIC_STRAPI_URL;
  const isPrefixed = /^(https?:\/\/)/;

  return isPrefixed.test(path) ? path : `${defaultPrefix}${path}`;
}
