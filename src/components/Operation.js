import useFormContext from "../hooks/useFormContext";
import { motor, spring } from "../assets/images/";

const Operation = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="motor"
          className={`radio-label ${
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
            onChange={handleChange}
            checked={data.operation === "motor"}
          />
        </label>
        <label
          htmlFor="manual"
          className={`radio-label ${
            data.operation === "manual" && "radio-label-selected"
          }`}
        >
          Manual Spring
          <img className="form-image" src={spring} />
          <input
            type="radio"
            id="manual"
            name="operation"
            value={data.operation}
            onChange={handleChange}
            checked={data.operation === "manual"}
          />
        </label>
      </div>
    </div>
  );

  return content;
};
export default Operation;
