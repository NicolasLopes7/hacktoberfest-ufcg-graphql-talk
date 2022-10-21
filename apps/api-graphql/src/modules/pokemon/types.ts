export type FindOnePokemonResolverArgsInput = {
  where: {
    id?: number;
    name?: string;
  };
};
export type BuildWhereOutput =
  | { id: { equals: number } }
  | { name: { equals: string } };

export type UpdatePokemonInput = {
  id: number;
  data: {
    name?: string;
    type?: string;
  };
};
