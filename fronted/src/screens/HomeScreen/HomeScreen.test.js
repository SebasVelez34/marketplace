import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeScreen from './HomeScreen';

describe('<HomeScreen />', () => {
  test('it should mount', () => {
    render(<HomeScreen />);
    
    const homeScreen = screen.getByTestId('HomeScreen');

    expect(homeScreen).toBeInTheDocument();
  });
});