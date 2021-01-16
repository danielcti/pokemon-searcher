import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PokeCard from "./components/PokeCard";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

test("renders a pokemon card", () => {
  render(
    <BrowserRouter>
      <PokeCard
        name="bulbasaur"
        id={1}
        sprites={{
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        }}
      />
    </BrowserRouter>
  );
  const title = screen.getByText(/bulbasaur/i);
  expect(title).toBeInTheDocument();
  const image = screen.getByAltText(/poke_avatar/i);
  expect(image).toBeInTheDocument();
});

test(`should render 50 pokemons in the home page`, async () => {
  render(<Home />);
  await waitFor(() => {
    const element = screen.getByTestId("pokemon-list");
    expect(element.children.length).toEqual(50);
  });
});

test(`should filter the pokemons list to show only 'bu' occurrences(2 cases)`, async () => {
  render(<Home />);
  await waitFor(() => {
    const element = screen.getByTestId("pokemon-list");
    expect(element.children.length).toEqual(50);
  });
  const input = screen.getByTestId("input");
  await fireEvent.change(input, { target: { value: 'bu' } })
  const elements = screen.getByTestId("pokemon-list");
  expect(elements.children.length).toEqual(2);
});

test(`should filter the pokemons list to show only 'xxx' occurrences(0 cases)`, async () => {
  render(<Home />);
  await waitFor(() => {
    const element = screen.getByTestId("pokemon-list");
    expect(element.children.length).toEqual(50);
  });
  const input = screen.getByTestId("input");
  await fireEvent.change(input, { target: { value: 'xxx' } })
  const elements = screen.getByTestId("pokemon-list");
  expect(elements.children.length).toEqual(0);
});
