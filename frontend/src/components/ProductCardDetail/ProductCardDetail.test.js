import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCardDetail from './ProductCardDetail';

describe('<ProductCardDetail />', () => {
  test('it should mount', () => {
    render(<ProductCardDetail />);
    
    const productCardDetail = screen.getByTestId('ProductCardDetail');

    expect(productCardDetail).toBeInTheDocument();
  });
});