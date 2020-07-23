import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartScreen from './CartScreen';

describe('<CartScreen />', () => {
  test('it should mount', () => {
    render(<CartScreen />);
    
    const cartScreen = screen.getByTestId('CartScreen');

    expect(cartScreen).toBeInTheDocument();
  });
});