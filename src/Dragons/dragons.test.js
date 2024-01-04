import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dragons from './dragons.list';

describe('<Dragons />', () => {
  test('it should mount', () => {
    render(<Dragons />);
    
    const dragons = screen.getByTestId('Dragons');

    expect(dragons).toBeInTheDocument();
  });
});