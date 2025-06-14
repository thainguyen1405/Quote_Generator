import { render, screen } from '@testing-library/react';
import QuoteGenerator from './QuoteGenerator';

test('renders learn react link', () => {
  render(<QuoteGenerator />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
