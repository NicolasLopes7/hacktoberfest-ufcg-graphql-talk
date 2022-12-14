import { PokemonInfo, prisma } from 'prisma';

const pokemonEvolutionFieldResolver = async (parent: PokemonInfo) => {
  if (!parent) return;
  return prisma.pokemonEvolution.findMany({
    where: {
      pokemonInfoId: Number(parent.id),
    },
  });
};

export const PokemonEvolutionFieldResolvers = {
  evolutions: pokemonEvolutionFieldResolver,
};
