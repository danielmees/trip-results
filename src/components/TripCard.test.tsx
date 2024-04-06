import { render, screen } from "@testing-library/react";
import { mockTripSet } from "../utils/mockData";
import TripCard from "./TripCard";

test("TripCard should render correct content", () => {
  render(<TripCard {...mockTripSet[0]} />);

  const image = screen.getByRole("img") as HTMLImageElement;
  expect(image.src).toContain(
    "https://cms.inspirato.com/ImageGen.ashx?image=test1.jpg&width=500"
  );
  screen.getByText("Starling");
  screen.getByText("Unit style: Beach");
  screen.getByText("Check in date: 14/02/2022");
});
