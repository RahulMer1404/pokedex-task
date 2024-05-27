// src/pages/api/trpc/[trpc].ts

import { pokemonRouter } from '@/server/routers/pokemon';
import * as trpcNext from '@trpc/server/adapters/next';

// Export API handler
export default trpcNext.createNextApiHandler({
  router: pokemonRouter,
  createContext: () => ({}),
});
