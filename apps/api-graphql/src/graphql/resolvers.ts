import { PokemonEvolutionFieldResolvers } from '../modules/evolutions/resolvers';
import { PokemonInfoFieldResolvers } from '../modules/info/resolvers';
import { PokemonQueries } from '../modules/pokemon/resolvers';

export const resolvers = {
  Query: { ...PokemonQueries },
  Pokemon: { ...PokemonInfoFieldResolvers },
  PokemonInfo: { ...PokemonEvolutionFieldResolvers },
};
