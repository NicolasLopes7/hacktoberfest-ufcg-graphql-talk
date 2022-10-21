-- CreateTable
CREATE TABLE "PokemonEvolution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pokemonInfoId" INTEGER NOT NULL,
    CONSTRAINT "PokemonEvolution_pokemonInfoId_fkey" FOREIGN KEY ("pokemonInfoId") REFERENCES "PokemonInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
