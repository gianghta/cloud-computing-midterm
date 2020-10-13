import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyTeam from './MyTeam';

describe('<MyTeam />', () => {
  test('it should mount', () => {
    render(<MyTeam />);
    
    const myTeam = screen.getByTestId('MyTeam');

    expect(myTeam).toBeInTheDocument();
  });
});