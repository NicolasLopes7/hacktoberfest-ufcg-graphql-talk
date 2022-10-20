/*
  Warnings:

  - You are about to drop the `PokemonEvolution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `type` on the `Pokemon` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PokemonEvolution";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "pokemonInfoId" INTEGER
);
INSERT INTO "new_Pokemon" ("id", "image_url", "name", "pokemonInfoId") SELECT "id", "image_url", "name", "pokemonInfoId" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
