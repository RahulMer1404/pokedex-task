// src/components/FilterablePokedexTable.tsx

import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokedexTable from './PokedexTable';
import PokemonTypeSelection from './PokemonTypeSelection';

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const [names, setNames] = useState('');
  const [pokemonArray, setPokemonArray] = useState<any[]>([]);

  const { data, refetch } = trpc.getByNameAndType.useQuery(
    JSON.stringify([
      names
        .split(',')
        .map((el) => el.trim())
        .filter((el) => el)
        .map((el) => `${el?.[0]?.toUpperCase()}${el.slice(1)}`),
      selectedType,
    ]),
    {
      enabled: false,
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPokemonArray([]);
    const result = await refetch();
    setPokemonArray(result.data || []);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              label="Pokemon Names (comma separated)"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PokemonTypeSelection
              selectedType={selectedType}
              selectType={setSelectedType}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Get Pokemons
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box mt={2}>
        {pokemonArray.length > 0 && <PokedexTable pokemons={pokemonArray} />}
      </Box>
    </Box>
  );
};

export default FilterablePokedexTable;
