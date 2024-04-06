import { useState, useEffect } from "react";
import { fetchData } from "./api/fetchData";
import TripCard from "./components/TripCard";
import Selector from "./components/Selector";
import {
  TripsData,
  TripSet,
  CompareDatesFormat,
  UnitStyle,
} from "./types/trips";
import { compareDates } from "./utils/date";
import "./App.scss";

function App() {
  const [tripsData, setTripsData] = useState<TripsData>();
  const [tripsToShow, setTripsToShow] = useState<TripSet>([]);
  const [sortKey, setSortKey] = useState<CompareDatesFormat>("closestFirst");

  useEffect(() => {
    (async () => {
      const tripsData = await fetchData("http://localhost:3000/trips.json");

      if (tripsData) {
        setTripsData(tripsData);
        const tripsToShow = sortTrips(tripsData.tripSet, "closestFirst");
        setTripsToShow(tripsToShow);
      }
    })();
  }, []);

  const sortTrips = (trips: TripSet, format: CompareDatesFormat) =>
    [...trips].sort((a, b) => {
      return compareDates(a.checkInDate, b.checkInDate, format) ? 1 : -1;
    });

  if (!tripsData)
    return (
      <div>
        <header>Loading..., please wait.</header>
      </div>
    );

  const revertSorting = () => {
    const newKey =
      sortKey === "closestFirst" ? "furthestFirst" : "closestFirst";
    setSortKey(newKey);
    setTripsToShow(sortTrips(tripsToShow, newKey));
  };

  const handleSelectChange = (value: UnitStyle) => {
    if (value === "All Vacations") {
      setTripsToShow(sortTrips(tripsData.tripSet, sortKey));
      return;
    }

    const filteredTrips = tripsData.tripSet.filter(
      (trip) => value === trip.unitStyleName
    );
    setTripsToShow(sortTrips(filteredTrips, sortKey));
  };

  const renderSelector = () => {
    const unitStyles = tripsData.styles;
    const styles = Object.values(unitStyles);
    return <Selector options={styles} onChange={handleSelectChange} />;
  };

  return (
    <div>
      <header>Trip Results</header>
      <section>
        <div className="actions-container">
          <div>
            <label>Sort trips by date:</label>
            <button onClick={revertSorting}>
              {sortKey === "closestFirst" ? "Closest first" : "Furthest first"}
            </button>
          </div>
          {renderSelector()}
        </div>
        <div className="trip-list">
          {tripsToShow.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
