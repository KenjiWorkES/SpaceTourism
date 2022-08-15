import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HomeContent } from "../../organisms";
import { BrowserRouter } from "react-router-dom";

test("check if exist Explore Button", async () => {
  render(<HomeContent />, { wrapper: BrowserRouter });

  const exploreButton = screen.getByRole("button", { name: /explore/i });

  expect(exploreButton).toBeInTheDocument();
});

test("test the explore button click", async () => {
  const user = userEvent.setup();
  render(<HomeContent />, { wrapper: BrowserRouter });

  const exploreButton = screen.getByRole("button", { name: /explore/i });

  await user.click(exploreButton);

  expect(global.window.location.pathname).toEqual("/destination");
});
