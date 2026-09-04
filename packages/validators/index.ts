export const isNonEmpty = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;
