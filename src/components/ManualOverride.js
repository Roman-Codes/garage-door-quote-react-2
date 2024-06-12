import useFormContext from "../hooks/useFormContext";
import { overrideFront, overrideBack } from "../assets/images/";
const ManualOverride = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="overrideFront"
          className={`radio-label ${
            data.manualOverride === "overrideFront" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={overrideFront} />
          <input
            type="radio"
            id="overrideFront"
            name="manualOverride"
            value={data.manualOverride}
            onChange={handleChange}
            checked={data.manualOverride === "overrideFront"}
          />
          Front
        </label>
        <label
          htmlFor="overrideBack"
          className={`radio-label ${
            data.manualOverride === "overrideBack" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={overrideBack} />
          <input
            type="radio"
            id="overrideBack"
            name="manualOverride"
            value={data.manualOverride}
            onChange={handleChange}
            checked={data.manualOverride === "overrideBack"}
          />
          Back
        </label>
      </div>
    </div>
  );

  return content;
};
export default ManualOverride;
