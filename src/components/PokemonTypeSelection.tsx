// src/components/PokemonTypeSelection.tsx

import { MenuItem, TextField } from '@mui/material';
import React from 'react';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const types = [
    'grass',
    'fire',
    'water',
    'bug',
    'normal',
    'poison',
    'electric',
    'ground',
    'fairy',
  ];

  return (
    <TextField
      select
      label="Select Type"
      value={selectedType || ''}
      onChange={(e) => selectType(e.target.value || undefined)}
      fullWidth
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {types.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default PokemonTypeSelection;
