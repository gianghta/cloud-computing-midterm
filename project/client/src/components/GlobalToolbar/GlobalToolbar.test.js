import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GlobalToolbar from './GlobalToolbar';

describe('<GlobalToolbar />', () => {
  test('it should mount', () => {
    render(<GlobalToolbar />);
    
    const globalToolbar = screen.getByTestId('GlobalToolbar');

    expect(globalToolbar).toBeInTheDocument();
  });
});