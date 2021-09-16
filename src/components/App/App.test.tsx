import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from 'components';

test('renders the logo', async () => {
  render(<App />);

  expect(await screen.findByTestId("logo")).toBeInTheDocument()
});
