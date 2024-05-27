// src/components/PokemonRow.tsx

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

type PokemonProps = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};

const PokemonRow: React.FC<PokemonProps> = ({ id, name, types, sprite }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <CardMedia
        component="img"
        image={sprite}
        alt={name}
        sx={{
          maxHeight: '100px',
          objectFit: 'contain',
          width: 'auto',
          marginLeft: '10px',
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Types: {types.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonRow;
