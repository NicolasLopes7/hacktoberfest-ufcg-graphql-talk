import type { CSSProperties, PropertyValue } from '@stitches/react';

type Properties = keyof CSSProperties;

export function createUtil<P extends Properties>(...properties: Properties[]) {
  return (value: PropertyValue<P>) =>
    properties.reduce(
      (acc, property) => ({
        ...acc,
        [property]: value,
      }),
      {}
    );
}
