import { prisma } from 'prisma';

type UpdatePayload = {
  id: number;
  name?: string;
  type?: string;
  image_url?: string;
};
export const updateService = async (payload: UpdatePayload) => {
  const updatedPokemon = await prisma.pokemon.update({
    where: { id: payload.id },
    data: {
      image_url: payload.image_url,
      name: payload.name,
      info: {
        updateMany: {
          data: {
            type: payload.type,
          },
          where: { pokemonId: payload.id },
        },
      },
    },
  });

  return updatedPokemon;
};
