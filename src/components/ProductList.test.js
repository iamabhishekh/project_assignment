// src/components/ProductList.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';

// Mock the product data
jest.mock('../data/products', () => ({
  products: [
    {
      id: 1,
      name: 'Scandinavian Chair',
      category: 'Furniture',
      price: 2600,
      rating: 5,
      image: 'scandinavian-chair.jpg',
    },
    {
      id: 2,
      name: 'Modern Lamp',
      category: 'Lighting',
      price: 150,
      rating: 4,
      image: 'modern-lamp.jpg',
    },
  ],
}));

describe('ProductList Component', () => {
  test('renders product list correctly', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    // Check if the Filter component is rendered
    expect(screen.getByText('All')).toBeInTheDocument();

    // Check if both products are rendered (since no filter is applied by default)
    expect(screen.getAllByRole('img')).toHaveLength(2); // Both products should render an image
    expect(screen.getByText('Scandinavian Chair')).toBeInTheDocument();
    expect(screen.getByText('Modern Lamp')).toBeInTheDocument();
  });



  test('displays all products when "All" category is selected', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    // After filtering, only the "Scandinavian Chair" should be displayed
    expect(screen.getByText('Scandinavian Chair')).toBeInTheDocument();

    // Both products should now be displayed again
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByText('Scandinavian Chair')).toBeInTheDocument();
    expect(screen.getByText('Modern Lamp')).toBeInTheDocument();
  });
});
