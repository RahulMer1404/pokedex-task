import { router, procedure } from '../trpc';
import { z } from 'zod';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const pokemonRouter = router({
  getByName: procedure.input(z.string()).query(async ({ input }) => {
    const pokemon = await prisma.pokemon.findUnique({
      where: { name: input },
    });

    if (!pokemon) return null;

    return {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.split(','),
      sprite: pokemon.sprite,
    };
  }),

  getByNames: procedure.input(z.array(z.string())).query(async ({ input }) => {
    try {
      const pokemons = await prisma.pokemon.findMany({
        where: { name: { in: input } },
      });

      return pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.split(','),
        sprite: pokemon.sprite,
      }));
    } catch (err) {
      console.log(err);
    }
  }),

  getByType: procedure.input(z.string().optional()).query(async ({ input }) => {
    const pokemons = await prisma.pokemon.findMany({
      where: input ? { types: { contains: input } } : {},
    });

    return pokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.split(','),
      sprite: pokemon.sprite,
    }));
  }),

  getByNameAndType: procedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const [names, type] = JSON.parse(input || '[]');
      const pokemons = await prisma.pokemon.findMany({
        where:
          names.length > 0 && type
            ? { types: { contains: type || '' }, name: { in: names || [] } }
            : names.length > 0
            ? { name: { in: names || [] } }
            : { types: { contains: type || '' } },
      });

      return pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.split(','),
        sprite: pokemon.sprite,
      }));
    }),
});

export type AppRouter = typeof pokemonRouter;
