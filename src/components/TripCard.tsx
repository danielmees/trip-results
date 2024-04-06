import { Trip } from "../types/trips";
import "./tripcard.scss";

const TripCard = ({
  heroImage,
  unitName,
  unitStyleName,
  checkInDate,
}: Trip) => (
  <div className="trip-card">
    <img
      src={`https://cms.inspirato.com/ImageGen.ashx?image=${heroImage}&width=500`}
      alt="hero"
    />
    <div>
      <p>{unitName}</p>
      <p>{unitStyleName}</p>
      <p>{checkInDate}</p>
    </div>
  </div>
);

export default TripCard;
