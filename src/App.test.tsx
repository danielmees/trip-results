import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockTripSet } from "./utils/mockData";
import App from "./App";

jest.mock("axios", () => {
  const fakeResponse = {
    data: {
      tripSet: mockTripSet,
      styles: {
        "0": "All Vacations",
        "1": "Beach",
        "2": "Lifestyle",
      },
    },
  };

  return {
    get: jest.fn(() => Promise.resolve(fakeResponse)),
  };
});

describe("App", () => {
  render(<App />);
  test("should display trips correctly according to sort and filter actions", async () => {
    screen.getByText("Loading..., please wait.");

    await waitFor(() => {
      screen.getByText("Trip Results");
    });

    const sortButton = screen.getByRole("button");
    const selector = screen.getByRole("combobox");

    const tripCards = screen.getAllByTestId("tripcard", {
      exact: false,
    });

    expect(tripCards.length).toBe(5);
    expect(tripCards[0].textContent).toContain("Starling");
    expect(tripCards[0].textContent).toContain("14/02/2022");
    expect(tripCards[2].textContent).toContain("Chamise");
    expect(tripCards[2].textContent).toContain("14/03/2022");
    expect(tripCards[4].textContent).toContain("Villa Palmera");
    expect(tripCards[4].textContent).toContain("14/04/2022");

    userEvent.click(sortButton);
    expect(tripCards[0].textContent).toContain("Villa Palmera");
    expect(tripCards[0].textContent).toContain("14/04/2022");
    expect(tripCards[4].textContent).toContain("Starling");
    expect(tripCards[4].textContent).toContain("14/02/2022");

    userEvent.selectOptions(selector, "Beach");
    const updatedTripCards = screen.getAllByTestId("tripcard", {
      exact: false,
    });
    expect(updatedTripCards.length).toBe(3);
    expect(tripCards[0].textContent).toContain("Villa Palmera");
    expect(tripCards[0].textContent).toContain("14/04/2022");
    expect(tripCards[1].textContent).toContain("Stargazer");
    expect(tripCards[1].textContent).toContain("16/02/2022");
    expect(tripCards[2].textContent).toContain("Starling");
    expect(tripCards[2].textContent).toContain("14/02/2022");

    userEvent.click(sortButton);
    expect(tripCards[0].textContent).toContain("Starling");
    expect(tripCards[0].textContent).toContain("14/02/2022");
    expect(tripCards[1].textContent).toContain("Stargazer");
    expect(tripCards[1].textContent).toContain("16/02/2022");
    expect(tripCards[2].textContent).toContain("Villa Palmera");
    expect(tripCards[2].textContent).toContain("14/04/2022");
  });
});
