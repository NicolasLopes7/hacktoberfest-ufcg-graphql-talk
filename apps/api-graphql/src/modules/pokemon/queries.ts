import { prisma } from 'prisma';
import { FindOnePokemonResolverArgsInput } from './types';
import { buildFindOnePokemonWhere } from './utils';

const findManyPokemonsResolver = async () => prisma.pokemon.findMany({});

const findOnePokemonResolver = async (
  _: unknown,
  args: FindOnePokemonResolverArgsInput
) => prisma.pokemon.findFirst({ where: buildFindOnePokemonWhere(args.where) });

export const PokemonQueries = {
  pokemons: findManyPokemonsResolver,
  pokemon: findOnePokemonResolver,
}
