import { Request, Response } from 'express';
import { createService } from '../services/create';
import { validateCreatePayload } from '../utils/validatePokemonCreatePayload';

export const create = async (req: Request, res: Response) => {
  if (!validateCreatePayload(req.body)) return res.sendStatus(400);

  const pokemon = await createService(req.body);
  return res.json(pokemon);
};
