import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegisterScreen from './RegisterScreen';

describe('<RegisterScreen />', () => {
  test('it should mount', () => {
    render(<RegisterScreen />);
    
    const registerScreen = screen.getByTestId('RegisterScreen');

    expect(registerScreen).toBeInTheDocument();
  });
});