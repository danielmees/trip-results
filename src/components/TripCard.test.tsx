import { render, screen } from "@testing-library/react";
import { UnitStyle } from "../types/trips";
import TripCard from "./TripCard";

test("TripCard should render correct content", () => {
  const mockTrip = {
    curatedTripSetId: 9,
    curatedTripSetName: "FAM 3-Night",
    curatedTripSetDescription: "FAM 3-Night",
    showTripValue: false,
    checkInDate: "2022-02-14T00:00:00Z",
    checkOutDate: "2022-02-17T00:00:00Z",
    numberOfDays: 3,
    curatedTripMasterInventoryId: 264828012,
    unitName: "Starling",
    unitID: 1761,
    unitSourceID: 2,
    rid: "R3834",
    unitParentCategoryID: 1,
    parentCategoryName: "Homes",
    propertyID: 0,
    propertyName: null,
    locationID: 93,
    locationName: "Rancho Palos Verdes, California",
    locationGroupID: 49,
    locationGroupName: "United States",
    unitStyleID: 1,
    unitStyleName: "Beach" as UnitStyle,
    coverImage:
      "/media/9405682/ranchopalosverdes-terranea-residence-starling-patiosunrise-cover-uhd.jpg",
    bedrooms: 2,
    bathrooms: "2",
    occupancy: 4,
    squareFootage: 1800,
    umbracoNodeID: 106460,
    unitURL:
      "/destinations/ranchos-palos-verdes-california/residences/starling",
    value: 0.0,
    overrideUrl: null,
    featuredOrder: 0,
    heroImage: "test1.jpg",
    isNew: false,
    dataMonthId: "2-2022",
    dataMonthName: "February, 2022",
  };

  render(<TripCard {...mockTrip} />);

  const image = screen.getByRole("img") as HTMLImageElement;
  expect(image.src).toContain(
    "https://cms.inspirato.com/ImageGen.ashx?image=test1.jpg&width=500"
  );
  screen.getByText("Starling");
  screen.getByText("Unit style: Beach");
  screen.getByText("Check in date: 14/02/2022");
});
