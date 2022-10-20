import { Request, Response } from 'express';
import { updateService } from '../services/update';

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, type, image_url } = req.body;

  const updatedPokemon = await updateService({
    id: Number(id),
    image_url,
    name,
    type,
  });

  return updatedPokemon;
};
