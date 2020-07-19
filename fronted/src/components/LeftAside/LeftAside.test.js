import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftAside from './LeftAside';

describe('<LeftAside />', () => {
  test('it should mount', () => {
    render(<LeftAside />);
    
    const leftAside = screen.getByTestId('LeftAside');

    expect(leftAside).toBeInTheDocument();
  });
});