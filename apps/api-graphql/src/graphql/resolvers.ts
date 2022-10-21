import { PokemonEvolutionFieldResolvers } from '../modules/evolutions/resolvers';
import { PokemonInfoFieldResolvers } from '../modules/info/resolvers';
import { PokemonMutations } from '../modules/pokemon/mutations';
import { PokemonQueries } from '../modules/pokemon/queries';

export const resolvers = {
  Query: { ...PokemonQueries },
  Mutation: { ...PokemonMutations },
  Pokemon: { ...PokemonInfoFieldResolvers },
  PokemonInfo: { ...PokemonEvolutionFieldResolvers },
};
