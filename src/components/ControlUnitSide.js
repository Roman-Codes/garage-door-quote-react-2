import useFormContext from "../hooks/useFormContext";
import { controlLeft, controlRight } from "../assets/images/";
import { positionDropdown } from "../utils/helpers";

const ControlUnitSide = () => {
  const { data, handleChange } = useFormContext();

  const renderContriolUnit = () => {
    return (
      <div className="flex-col">
        <div className="split-container">
          <label
            className={`radio-label  ${
              data.controlUnit === "unitLeft" && "radio-label-selected"
            }`}
            htmlFor="unitLeft"
          >
            <img className="form-image" src={controlLeft} />
            <input
              type="radio"
              id="unitLeft"
              name="controlUnit"
              value={data.controlUnit}
              onChange={handleChange}
              checked={data.controlUnit === "unitLeft"}
            />
            Left
          </label>
          <label
            className={`radio-label  ${
              data.controlUnit === "unitRight" && "radio-label-selected"
            }`}
            htmlFor="unitRight"
          >
            <img className="form-image" src={controlRight} />
            <input
              type="radio"
              id="unitRight"
              name="controlUnit"
              value={data.controlUnit}
              onChange={handleChange}
              checked={data.controlUnit === "unitRight"}
            />
            Right
          </label>
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
