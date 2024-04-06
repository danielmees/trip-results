import { CompareDatesFormat } from "../types/trips";

export const convertISODate = (date: string) =>
  new Date(date).toLocaleDateString("en-AU");

export const compareDates = (
  date1: string,
  date2: string,
  format: CompareDatesFormat
) => (format === "closestFirst" ? date1 > date2 : !(date1 > date2));
