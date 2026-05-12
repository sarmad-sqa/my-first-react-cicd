import { render, screen } from '@testing-library/react';
import App from './App';

test('check if submit button is present', () => {
  render(<App />);
  // "Submit" button dhoond raha hai
  const buttonElement = screen.getByText(/submit/i); 
  expect(buttonElement).toBeInTheDocument();
});