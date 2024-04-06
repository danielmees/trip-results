import { CompareDatesFormat } from "../types/trips";

export const convertISODate = (date: string) => {
  if (!date) return;

  return new Date(date).toLocaleDateString("en-AU");
};

export const compareDates = (
  date1: string,
  date2: string,
  format: CompareDatesFormat
) => {
  if (!date1 || !date2) return;

  if (format === "closestFirst") {
    return date1 > date2;
  } else {
    return !(date1 > date2);
  }
};
