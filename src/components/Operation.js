import useFormContext from "../hooks/useFormContext";
import { motor, spring } from "../assets/images/";

const Operation = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="motor"
          className={`radio-label  ${
            data.operation === "motor" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={motor} />
          Motor
          <input
            type="radio"
            id="motor"
            name="operation"
            value={data.operation}
            checked={data.operation === "motor"}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="manualKey"
          className={`radio-label ${
            data.operation === "manualKey" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={spring} />
          Manual Spring + Key
          <input
            type="radio"
            id="manualKey"
            name="operation"
            value={data.operation}
            onChange={handleChange}
            checked={data.operation === "manualKey"}
          />
        </label>
        <label
          htmlFor="manualBolt"
          className={`radio-label ${
            data.operation === "manualBolt" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={spring} />
          Manual Spring + Slidebolts
          <input
            type="radio"
            id="manualBolt"
            name="operation"
            value={data.operation}
            onChange={handleChange}
            checked={data.operation === "manualBolt"}
          />
        </label>
      </div>
    </div>
  );

  return content;
};
export default Operation;
