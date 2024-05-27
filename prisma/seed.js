import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      {
        id: 0,
        name: 'Bulbasaur',
        types: 'grass, poison',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
      },
      {
        id: 1,
        name: 'Charmander',
        types: 'fire',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
      },
      {
        id: 2,
        name: 'Squirtle',
        types: 'water',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
      },
      {
        id: 3,
        name: 'Pikachu',
        types: 'electric',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
      },
      {
        id: 4,
        name: 'Jigglypuff',
        types: 'normal, fairy',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png',
      },
      {
        id: 5,
        name: 'Meowth',
        types: 'normal',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png',
      },
      {
        id: 6,
        name: 'Psyduck',
        types: 'water',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png',
      },
      {
        id: 7,
        name: 'Growlithe',
        types: 'fire',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png',
      },
      {
        id: 8,
        name: 'Poliwag',
        types: 'water',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png',
      },
      {
        id: 9,
        name: 'Abra',
        types: 'psychic',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png',
      },
      {
        id: 10,
        name: 'Machop',
        types: 'fighting',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png',
      },
      {
        id: 11,
        name: 'Bellsprout',
        types: 'grass, poison',
        sprite:
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png',
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
