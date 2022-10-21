import { Request, Response } from 'express';
import { prisma } from 'prisma';
export const getAll = async (req: Request, res: Response) => {
  const { page, limit, search } = req.query;

  const where: any = {};

  if (search) {
    where.name = { contains: search };
  }

  const pokemons = await prisma.pokemon.findMany({
    where,
    skip: page ? (Number(page) - 1) * Number(limit) : undefined,
    take: limit ? Number(limit) : undefined,
  });

  return res.json(pokemons);
};
