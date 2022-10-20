import { Request, Response } from 'express';
import { prisma } from 'prisma';

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;
  const pokemonInfo = await prisma.pokemonInfo.findFirst({
    where: { pokemonId: Number(id) },
  });

  if (!pokemonInfo) return res.sendStatus(404);

  return res.json(pokemonInfo);
};
