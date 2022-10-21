import { BuildWhereOutput, FindOnePokemonResolverArgsInput } from './types';

export const buildFindOnePokemonWhere = (
  fields: FindOnePokemonResolverArgsInput['where']
): BuildWhereOutput => {
  if (fields?.id) return { id: { equals: fields.id } };
  return { name: { equals: fields.name! } };
};
