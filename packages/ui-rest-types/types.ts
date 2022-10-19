export enum PokemonType {
  ELECTRIC = 'electric',
  FIRE = 'fire',
  WATER = 'water',
}

export type Pokemon = {
  id: number;
  name: string;
  image_url: string;
  info: {
    type: PokemonType;
  };
  evolutions?: Pokemon[];
};
