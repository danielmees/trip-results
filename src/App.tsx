import { useState, useEffect } from "react";
import { fetchData } from "./api/fetchData";
import TripCard from "./components/TripCard";
import { TripsData } from "./types/trips";
import "./App.scss";

function App() {
  const [tripsData, setTripsData] = useState<TripsData>();

  useEffect(() => {
    (async () => {
      const tripsData = await fetchData("http://localhost:3000/trips.json");

      if (tripsData) {
        setTripsData(tripsData);
      }
    })();
  }, []);

  if (!tripsData) return null;

  return (
    <div className="trip-results">
      <header>Trip Results</header>
      <section>
        {tripsData.tripSet.map((trip) => (
          <TripCard {...trip} />
        ))}
      </section>
    </div>
  );
}

export default App;
