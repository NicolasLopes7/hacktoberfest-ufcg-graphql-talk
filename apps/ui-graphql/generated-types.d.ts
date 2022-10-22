export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FindPokemonWhereInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updatePokemon?: Maybe<Pokemon>;
};


export type MutationUpdatePokemonArgs = {
  data: UpdatePokemonInput;
  id: Scalars['ID'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  id: Scalars['ID'];
  image_url: Scalars['String'];
  info?: Maybe<PokemonInfo>;
  name: Scalars['String'];
};

export type PokemonEvolution = {
  __typename?: 'PokemonEvolution';
  id: Scalars['ID'];
  name: Scalars['String'];
  pokemonInfoId: Scalars['ID'];
};

export type PokemonInfo = {
  __typename?: 'PokemonInfo';
  evolutions?: Maybe<Array<Maybe<PokemonEvolution>>>;
  id: Scalars['ID'];
  pokemonId: Scalars['ID'];
  type: PokemonType;
};

export enum PokemonType {
  Electric = 'electric',
  Fire = 'fire',
  Water = 'water'
}

export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons: Array<Pokemon>;
};


export type QueryPokemonArgs = {
  where: FindPokemonWhereInput;
};


export type QueryPokemonsArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type UpdatePokemonInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PokemonType>;
};
