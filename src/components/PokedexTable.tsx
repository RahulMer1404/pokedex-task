// src/components/PokedexTable.tsx

import { Box, Grid, Pagination } from '@mui/material';
import React, { useState } from 'react';
import PokemonRow from './PokemonRow';

type PokedexTableProps = {
  pokemons: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
};

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const paginatedPokemons = pokemons.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box>
      <Grid container spacing={2}>
        {paginatedPokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <PokemonRow
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              sprite={pokemon.sprite}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(pokemons.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default PokedexTable;
