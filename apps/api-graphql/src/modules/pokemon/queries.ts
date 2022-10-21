import { prisma } from 'prisma';
import {
  FindManyPokemonsResolverInput,
  FindOnePokemonResolverArgsInput,
} from './types';
import { buildFindOnePokemonWhere } from './utils';

const findManyPokemonsResolver = async (
  _: unknown,
  args: FindManyPokemonsResolverInput
) => {
  const where: Record<string, unknown> = {};
  if (args.search) {
    where.name = { contains: args.search };
  }

  const pokemons = await prisma.pokemon.findMany({ where });
  return pokemons;
};

const findOnePokemonResolver = async (
  _: unknown,
  args: FindOnePokemonResolverArgsInput
) => prisma.pokemon.findFirst({ where: buildFindOnePokemonWhere(args.where) });

export const PokemonQueries = {
  pokemons: findManyPokemonsResolver,
  pokemon: findOnePokemonResolver,
};
