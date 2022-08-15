import "@testing-library/jest-dom";
import { render, screen } from "../../../utils/test-utils";
import { CrewContent } from "../../organisms";
import userEvent from "@testing-library/user-event";

test("check initial state", () => {
  render(<CrewContent />);

  const image = screen.getByRole("img", { name: /Douglas Hurley/i });

  expect(image).toBeInTheDocument();

  const name = screen.getByText(/Douglas Hurley/i);

  expect(name).toBeInTheDocument();
});

test("change the current slide", async () => {
  const user = userEvent.setup();
  render(<CrewContent />);

  const listItems = screen.getAllByRole("listitem");

  expect(listItems).toHaveLength(4);

  await user.click(listItems[1]);

  const name = screen.getByText(/Mark Shuttleworth/i);

  expect(name).toBeInTheDocument();

  const image = screen.getByRole("img", { name: /Mark Shuttleworth/i });

  expect(image).toBeInTheDocument();
});
