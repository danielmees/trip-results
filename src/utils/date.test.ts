import { convertISODate, compareDates } from "./date";

test("convertISODate should generate correct local date", () => {
  expect(convertISODate("2022-02-23T00:00:00Z")).toBe("23/02/2022");
  expect(convertISODate("2021-05-08")).toBe("08/05/2021");
});

test("compareDates should return correct result", () => {
  expect(
    compareDates("2022-02-23T00:00:00Z", "2022-05-01T00:00:00Z", "closestFirst")
  ).toBe(false);
  expect(
    compareDates(
      "2022-02-23T00:00:00Z",
      "2022-05-01T00:00:00Z",
      "furthestFirst"
    )
  ).toBe(true);

  expect(
    compareDates("2022-02-23T00:00:00Z", "2022-02-22T00:00:00Z", "closestFirst")
  ).toBe(true);
  expect(
    compareDates(
      "2022-02-23T00:00:00Z",
      "2022-02-22T00:00:00Z",
      "furthestFirst"
    )
  ).toBe(false);
});
