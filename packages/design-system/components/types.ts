import { PokemonType } from 'ui-rest-types';

type Maybe<T> = T | null;
type GenericInfo = {
  type?: string | PokemonType;
  // evolutions?: any[];
};
export type GenericPokemon = {
  name: string;
  image_url: string;
  info?: Maybe<GenericInfo> | GenericInfo;
};
