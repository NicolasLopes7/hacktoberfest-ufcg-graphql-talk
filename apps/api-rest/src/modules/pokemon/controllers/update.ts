import { Request, Response } from 'express';
import { updateService } from '../services/update';

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, info, image_url } = req.body;

  const updatedPokemon = await updateService({
    id: Number(id),
    image_url,
    name,
    type: info?.type,
  });

  return res.json(updatedPokemon);
};
