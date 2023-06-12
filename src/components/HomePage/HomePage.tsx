import { Container } from '@mui/material';
import React from 'react';
import { Header } from '../Header/Header';
import { RecipeFilter } from '../RecipeFilter/RecipeFilter';
import { RecipeList } from '../RecipeList/RecipeList';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} maxWidth="sm">
        <RecipeFilter />
        <RecipeList />
      </Container>
    </>
  );
}
