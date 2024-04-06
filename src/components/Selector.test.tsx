import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UnitStyle } from "../types/trips";
import Selector from "./Selector";

describe("Selector", () => {
  const mockOptions: UnitStyle[] = ["Beach", "Metropolitan", "Mountain"];
  const mockOnChange = jest.fn();

  test("should render a select with correct options", () => {
    render(<Selector options={mockOptions} onChange={mockOnChange} />);

    screen.getByRole("combobox");
    screen.getByText("Beach");
    screen.getByText("Metropolitan");
    screen.getByText("Mountain");
  });

  test("should call onChange function correctly", () => {
    render(<Selector options={mockOptions} onChange={mockOnChange} />);

    const selector = screen.getByRole("combobox");

    userEvent.selectOptions(selector, "Metropolitan");
    expect(mockOnChange).toBeCalledWith("Metropolitan");

    userEvent.selectOptions(selector, "Mountain");
    expect(mockOnChange).toBeCalledWith("Mountain");
  });
});
