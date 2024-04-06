export type UnitStyle =
  | "All Vacations"
  | "Beach"
  | "Lifestyle"
  | "Metropolitan"
  | "Mountain";

export type UnitStyles = Record<string, UnitStyle>;

export interface Trip {
  curatedTripSetId: number;
  curatedTripSetName: string;
  curatedTripSetDescription: string;
  showTripValue: boolean;
  checkInDate: string;
  checkOutDate: string;
  numberOfDays: number;
  curatedTripMasterInventoryId: number;
  unitName: string;
  unitID: number;
  unitSourceID: number;
  rid: string;
  unitParentCategoryID: number;
  parentCategoryName: string;
  propertyID: number;
  propertyName: string | null;
  locationID: number;
  locationName: string;
  locationGroupID: number;
  locationGroupName: string;
  unitStyleID: number;
  unitStyleName: UnitStyle;
  coverImage: string;
  bedrooms: number;
  bathrooms: string;
  occupancy: number;
  squareFootage: number;
  umbracoNodeID: number;
  unitURL: string;
  value: number;
  overrideUrl: string | null;
  featuredOrder: number;
  heroImage: string;
  isNew: boolean;
  dataMonthId: string;
  dataMonthName: string;
}

export type TripSet = Trip[];

export interface TripsData {
  tripSet: TripSet;
  styles: UnitStyles;
}

export type CompareDatesFormat = "closestFirst" | "furthestFirst";
