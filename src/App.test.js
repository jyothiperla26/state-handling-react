import { render, screen } from '@testing-library/react';
import App from './App';


test("render User heading", () => {
  render(<App/>);
  const name = screen.getByText("Users");
  expect(name).toBeInTheDocument();
});

test("render Add button", () => {
  render(<App/>);
  const name = screen.getByText("Add");
  expect(name).toBeInTheDocument();
});