/**
 * Converts string to camelCase string
 */
export const stringToCamel = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};
