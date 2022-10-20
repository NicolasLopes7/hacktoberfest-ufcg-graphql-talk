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
        update: {
          type: payload.type,
        },
      },
    },
  });

  return updatedPokemon;
};
