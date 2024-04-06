import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should display a loading message when fetching data", () => {
    render(<App />);

    screen.getByText("Loading..., please wait.");
  });
});
