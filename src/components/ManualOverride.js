import useFormContext from "../hooks/useFormContext";
import {
  overrideFront,
  overrideBack,
  no as overrideNone,
} from "../assets/images/";
const ManualOverride = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="overrideFront"
          className={`radio-label 
          ${data.operation === "manual" && "radio-label-disabled"}
          ${data.manualOverride === "overrideFront" && "radio-label-selected"}`}
        >
          <img className="form-image" src={overrideFront} />
          <input
            disabled={data.operation === "manual"}
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
          className={`radio-label 
          ${data.operation === "manual" && "radio-label-disabled"}
          ${data.manualOverride === "overrideBack" && "radio-label-selected"}`}
        >
          <img className="form-image" src={overrideBack} />
          <input
            disabled={data.operation === "manual"}
            type="radio"
            id="overrideBack"
            name="manualOverride"
            value={data.manualOverride}
            onChange={handleChange}
            checked={data.manualOverride === "overrideBack"}
          />
          Back
        </label>
        <label
          htmlFor="overrideNone"
          className={`radio-label ${
            data.manualOverride === "overrideNone" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={overrideNone} />
          <input
            checked={data.operation === "manual"}
            type="radio"
            id="overrideNone"
            name="manualOverride"
            value={data.manualOverride}
            onChange={handleChange}
          />
          No Override
        </label>
      </div>
    </div>
  );

  return content;
};
export default ManualOverride;
