import "@testing-library/jest-dom";
import { render, screen } from "../../../utils/test-utils";
import { Header } from "../../organisms";
import userEvent from "@testing-library/user-event";

test("check initial state", () => {
  render(<Header />);

  const headerLinks = screen.getAllByRole("link");
  expect(headerLinks).toHaveLength(4);
});

test("check if page change if click in a item", async () => {
  const user = userEvent.setup();
  render(<Header />);

  const headerLinks = screen.getAllByRole("link");
  expect(headerLinks[0]).toHaveClass("header__link--active");

  await user.click(headerLinks[1]);
  expect(headerLinks[0]).not.toHaveClass("header__link--active");
  expect(headerLinks[1]).toHaveClass("header__link--active");

  expect(global.window.location.pathname).toEqual("/destination");
});
