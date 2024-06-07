import useFormContext from "../hooks/useFormContext";
import { controlLeft, controlRight } from "../assets/images/";
import { positionDropdown } from "../utils/helpers";

const ControlUnitSide = () => {
  const { data, handleChange } = useFormContext();

  const renderContriolUnit = () => {
    return (
      <div>
        <div className="split-container">
          <img className="form-image" src={controlLeft} />
          <img className="form-image" src={controlRight} />
        </div>
        <div className="split-container">
          <div className="radio-container">
            <label htmlFor="unitLeft">Left</label>
            <input
              type="radio"
              id="unitLeft"
              name="controlUnit"
              value={data.controlUnit}
              onChange={handleChange}
              checked={data.controlUnit === "unitLeft"}
            />
          </div>
          <div className="radio-container">
            <label htmlFor="unitRight">Right</label>
            <input
              type="radio"
              id="unitRight"
              name="controlUnit"
              value={data.controlUnit}
              onChange={handleChange}
              checked={data.controlUnit === "unitRight"}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderManual = () => {
    return (
      <div className="flex-col">
        {positionDropdown(
          "Box",
          "manualControlBox",
          data.manualControlBox,
          handleChange
        )}
        {positionDropdown(
          "Handle",
          "manualControlHandle",
          data.manualControlHandle,
          handleChange
        )}
        {positionDropdown(
          "Lock",
          "manualControlLock",
          data.manualControlLock,
          handleChange
        )}
      </div>
    );
  };
  const content = (
    <div className="flex-col">
      {data.operation === "motor" ? renderContriolUnit() : renderManual()}
    </div>
  );

  return content;
};
export default ControlUnitSide;
