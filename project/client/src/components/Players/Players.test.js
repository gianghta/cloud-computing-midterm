import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Players from './Players';

describe('<Players />', () => {
  test('it should mount', () => {
    render(<Players />);
    
    const players = screen.getByTestId('Players');

    expect(players).toBeInTheDocument();
  });
});