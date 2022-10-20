import { Request, Response } from 'express';
import { prisma } from 'prisma';

export const get = async (req: Request, res: Response) => {
  const { name } = req.params;
  const pokemon = await prisma.pokemon.findFirst({
    where: { name },
  });

  if (!pokemon) return res.sendStatus(404);

  return res.json(pokemon);
};
