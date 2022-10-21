import { prisma } from 'prisma';
import { UpdatePokemonInput } from './types';

const updatePokemonResolver = async (_: unknown, args: UpdatePokemonInput) => {
  const { id, data } = args;

  const pokemon = await prisma.pokemon.update({
    data: {
      ...(data.name ? { name: data.name } : {}),
      ...(data.type ? { info: { update: { type: data.type } } } : {}),
    },
    where: { id: Number(id) },
  });

  return pokemon;
};

export const PokemonMutations = {
  updatePokemon: updatePokemonResolver,
};
