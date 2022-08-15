import "@testing-library/jest-dom";
import { render, screen } from "../../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { HomeContent } from "../../organisms";

test("check if exist Explore Button", async () => {
  render(<HomeContent />);

  const exploreButton = screen.getByRole("button", { name: /explore/i });

  expect(exploreButton).toBeInTheDocument();
});

test("test the explore button click", async () => {
  const user = userEvent.setup();
  render(<HomeContent />);

  const exploreButton = screen.getByRole("button", { name: /explore/i });

  await user.click(exploreButton);

  expect(global.window.location.pathname).toEqual("/destination");
});
