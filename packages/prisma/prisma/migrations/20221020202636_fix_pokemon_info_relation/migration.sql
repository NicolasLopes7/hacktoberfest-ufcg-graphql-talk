/*
  Warnings:

  - You are about to drop the column `pokemonInfoId` on the `Pokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pokemonId]` on the table `PokemonInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL
);
INSERT INTO "new_Pokemon" ("id", "image_url", "name") SELECT "id", "image_url", "name" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PokemonInfo_pokemonId_key" ON "PokemonInfo"("pokemonId");
