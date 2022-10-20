import { Router } from 'express';
import Pokemon from './modules/pokemon';
export const routes = Router();

routes.get('/pokemons', Pokemon.controllers.getAll);
routes.get('/pokemon/:name', Pokemon.controllers.get);
routes.post('/pokemon', Pokemon.controllers.create);
routes.put('/pokemon', Pokemon.controllers.update);
