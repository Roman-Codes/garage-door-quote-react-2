import useFormContext from "../hooks/useFormContext";
import { exit1, exit8 } from "../assets/images";
const ExitStrap = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <img className="form-image" src={exit1} />
        <img className="form-image" src={exit8} />
      </div>
      <div className="split-container">
        <div className="radio-container">
          <label htmlFor="exit1">1</label>
          <input
            type="radio"
            id="exit1"
            name="exitStrap"
            value={data.exitStrap}
            onChange={handleChange}
            checked={data.exitStrap === "exit1"}
          />
        </div>
        <div className="radio-container">
          <label htmlFor="exit8">8</label>
          <input
            type="radio"
            id="exit8"
            name="exitStrap"
            value={data.exitStrap}
            onChange={handleChange}
            checked={data.exitStrap === "exit8"}
          />
        </div>
      </div>
    </div>
  );

  return content;
};
export default ExitStrap;
