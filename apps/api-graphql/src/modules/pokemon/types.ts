export type FindOnePokemonResolverArgsInput = {
  where: {
    id?: number;
    name?: string;
  };
};
export type BuildWhereOutput =
  | { id: { equals: number } }
  | { name: { equals: string } };
