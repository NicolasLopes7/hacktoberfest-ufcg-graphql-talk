export type GraphQLResult<Name extends string, Type> = {
  [n in Name]: Type;
};
