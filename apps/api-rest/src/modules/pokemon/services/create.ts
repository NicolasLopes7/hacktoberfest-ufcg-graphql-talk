import { prisma } from 'prisma';
import { CreatePayload } from '../utils/validatePokemonCreatePayload';

export const createService = async (payload: CreatePayload) => {
  const pokemon = await prisma.pokemon.create({
    data: {
      image_url: payload.image_url,
      name: payload.name,
      info: {
        create: { type: payload.type },
      },
    },
  });

  return pokemon;
};
