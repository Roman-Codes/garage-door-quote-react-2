import useFormContext from "../hooks/useFormContext";
import { exit1, exit8, no } from "../assets/images";
const ExitStrap = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="exit1"
          className={`radio-label ${
            data.exitStrap === "exit1" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={exit1} />
          <input
            type="radio"
            id="exit1"
            name="exitStrap"
            value={data.exitStrap}
            onChange={handleChange}
            checked={data.exitStrap === "exit1"}
          />
          1
        </label>
        <label
          htmlFor="exit8"
          className={`radio-label ${
            data.exitStrap === "exit8" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={exit8} />
          <input
            type="radio"
            id="exit8"
            name="exitStrap"
            value={data.exitStrap}
            onChange={handleChange}
            checked={data.exitStrap === "exit8"}
          />
          8
        </label>
        <label
          htmlFor="noExit"
          className={`radio-label ${
            data.exitStrap === "noExit" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={no} />
          <input
            type="radio"
            id="noExit"
            name="exitStrap"
            value={data.exitStrap}
            onChange={handleChange}
            checked={data.exitStrap === "noExit"}
          />
          No Exit
        </label>
      </div>
    </div>
  );

  return content;
};
export default ExitStrap;
