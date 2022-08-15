import "@testing-library/jest-dom";
import { render, screen } from "../../../utils/test-utils";
import { DestinationContent } from "../../organisms";
import userEvent from "@testing-library/user-event";

test("check the initial state", () => {
  render(<DestinationContent />);

  const image = screen.getByRole("img", { name: /Moon/i });
  expect(image).toBeInTheDocument();

  const title = screen.getByRole("heading", { name: /Moon/i });
  expect(title).toBeInTheDocument();
});

test("check if the planet change with listItem click", async () => {
  const user = userEvent.setup();
  render(<DestinationContent />);

  const listsItems = screen.getAllByRole("listitem");
  expect(listsItems).toHaveLength(4);

  await user.click(listsItems[1]);
  const image = screen.getByRole("img", { name: /Mars/i });
  expect(image).toBeInTheDocument();

  const title = screen.getByRole("heading", { name: /Mars/i });
  expect(title).toBeInTheDocument();
});
