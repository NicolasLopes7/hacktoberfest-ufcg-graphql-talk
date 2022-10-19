export function aliasColorScheme(
  prefix: string,
  colorScheme: Record<string, string>
): Record<string, string> {
  return Object.entries(colorScheme).reduce(
    (acc, [_, value], index) => ({
      ...acc,
      [`${prefix}${index + 1}`]: value,
    }),
    {}
  );
}
