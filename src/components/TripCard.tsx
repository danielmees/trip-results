import { Trip } from "../types/trips";
import { convertISODate } from "../utils/date";
import "./tripcard.scss";

const TripCard = ({
  heroImage,
  unitName,
  unitStyleName,
  checkInDate,
}: Trip) => {
  const checkInDateAU = convertISODate(checkInDate);

  return (
    <div className="trip-card">
      <img
        src={`https://cms.inspirato.com/ImageGen.ashx?image=${heroImage}&width=500`}
        alt="hero"
      />
      <div>
        <p>{unitName}</p>
        <p>Unit style: {unitStyleName}</p>
        <p>Check in date: {checkInDateAU}</p>
      </div>
    </div>
  );
};

export default TripCard;
