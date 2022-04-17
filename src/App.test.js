import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders isPageLong status', () => {
  render(<App />);
  const statusElement = screen.getByText(/isPageLong/i);
  expect(statusElement).toBeInTheDocument();
});