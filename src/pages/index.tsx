import FilterablePokedexTable from '@/components/FilterablePokedexTable';
import { Box, Container } from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Box mt={4}>
        <FilterablePokedexTable />
      </Box>
    </Container>
  );
};

export default HomePage;
