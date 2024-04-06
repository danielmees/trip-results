import { useState, useEffect } from "react";
import { fetchData } from "./api/fetchData";
import TripCard from "./components/TripCard";
import { TripsData, TripSet, CompareDatesFormat } from "./types/trips";
import { compareDates } from "./utils/date";
import "./App.scss";

function App() {
  const [tripsData, setTripsData] = useState<TripsData>();
  const [sortedTrips, setSortedTrips] = useState<TripSet>([]);
  const [sortKey, setSortKey] = useState<CompareDatesFormat>("closestFirst");

  useEffect(() => {
    (async () => {
      const tripsData = await fetchData("http://localhost:3000/trips.json");

      if (tripsData) {
        setTripsData(tripsData);
        const sortedTrips = sortTrips(tripsData.tripSet, sortKey);
        setSortedTrips(sortedTrips);
      }
    })();
  }, [sortKey]);

  const sortTrips = (trips: TripSet, format: CompareDatesFormat) =>
    [...trips].sort((a, b) => {
      return compareDates(a.checkInDate, b.checkInDate, format) ? 1 : -1;
    });

  if (!tripsData) return null;

  const revertSorting = () => {
    const newKey =
      sortKey === "closestFirst" ? "furthestFirst" : "closestFirst";
    setSortKey(newKey);
    const sortedTrips = sortTrips(tripsData.tripSet, newKey);
    setSortedTrips(sortedTrips);
  };

  return (
    <div className="trip-results">
      <header>Trip Results</header>
      <section>
        <div className="actions-container">
          <label>Sort trips by date:</label>
          <button onClick={revertSorting}>
            {sortKey === "closestFirst" ? "Closest first" : "Furthest First"}
          </button>
        </div>
        <div className="trip-list">
          {sortedTrips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
