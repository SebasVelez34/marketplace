import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductScreen from './ProductScreen';

describe('<ProductScreen />', () => {
  test('it should mount', () => {
    render(<ProductScreen />);
    
    const productScreen = screen.getByTestId('ProductScreen');

    expect(productScreen).toBeInTheDocument();
  });
});