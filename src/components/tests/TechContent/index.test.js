import "@testing-library/jest-dom";
import { render, screen } from "../../../utils/test-utils";
import { TechContent } from "../../organisms";
import userEvent from "@testing-library/user-event";

test("check initial state", () => {
  render(<TechContent />);

  const image = screen.getByRole("img", { name: /Launch Vehicle/i });
  expect(image).toBeInTheDocument();

  const title = screen.getByRole("heading", { name: /Launch Vehicle/i });
  expect(title).toBeInTheDocument();
});

test("change the slide with a click in the list item", async () => {
  const user = userEvent.setup();
  render(<TechContent />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);

  await user.click(listItems[1]);
  const image = screen.getByRole("img", { name: /Spaceport/i });
  expect(image).toBeInTheDocument();

  const title = screen.getByRole("heading", { name: /Spaceport/i });
  expect(title).toBeInTheDocument();
});
