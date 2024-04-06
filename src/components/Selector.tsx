import { UnitStyle } from "../types/trips";
import "./selector.scss";

type Props = {
  options: UnitStyle[];
  onChange: (value: UnitStyle) => void;
};

const Selector = ({ options, onChange }: Props) => (
  <div className="selector-container">
    <label>Filter trips by style:</label>
    <select onChange={(e) => onChange(e.target.value as UnitStyle)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Selector;
