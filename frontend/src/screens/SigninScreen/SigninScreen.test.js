import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SigninScreen from './SigninScreen';

describe('<SigninScreen />', () => {
  test('it should mount', () => {
    render(<SigninScreen />);
    
    const signinScreen = screen.getByTestId('SigninScreen');

    expect(signinScreen).toBeInTheDocument();
  });
});