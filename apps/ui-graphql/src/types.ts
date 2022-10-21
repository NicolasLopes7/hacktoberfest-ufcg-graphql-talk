export type NamedPropertyInsideData<Name extends string, Type> = {
  [n in Name]: Type;
};
