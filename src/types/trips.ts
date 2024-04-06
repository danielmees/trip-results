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
  unitID: string;
  unitSourceID: number;
  rid: string;
  unitParentCategoryID: string;
  parentCategoryName: string;
  propertyID: number;
  propertyName: string | null;
  locationID: number;
  locationName: string;
  locationGroupID: number;
  locationGroupName: string;
  unitStyleID: number;
  unitStyleName: string;
  coverImage: string;
  bedrooms: number;
  bathrooms: number;
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
}
