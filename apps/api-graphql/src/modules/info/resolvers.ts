import { Pokemon, prisma } from 'prisma';

const pokemonInfoFieldResolver = async (parent: Pokemon) => {
  if (!parent) return;

  const info = await prisma.pokemonInfo.findFirst({
    where: {
      pokemonId: parent.id,
    },
  });
  return info;
};

export const PokemonInfoFieldResolvers = {
  info: pokemonInfoFieldResolver,
};
