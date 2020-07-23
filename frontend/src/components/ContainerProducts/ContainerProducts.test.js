import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContainerProducts from './ContainerProducts';

describe('<ContainerProducts />', () => {
  test('it should mount', () => {
    render(<ContainerProducts />);
    
    const containerProducts = screen.getByTestId('ContainerProducts');

    expect(containerProducts).toBeInTheDocument();
  });
});