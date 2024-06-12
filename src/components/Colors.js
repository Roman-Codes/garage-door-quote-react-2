import useFormContext from "../hooks/useFormContext";
import { colorDropdown } from "../utils/helpers";

const Colors = () => {
  const { data, handleChange } = useFormContext();

  const renderCustom = () => {
    return (
      <>
        {colorDropdown("Slat", "colorSlat", data.colorSlat, handleChange)}
        {colorDropdown(
          "Endslat",
          "colorEndslat",
          data.colorEndslat,
          handleChange
        )}
        {colorDropdown("Box", "colorBox", data.colorBox, handleChange)}
        {colorDropdown("Guiderail", "colorRail", data.colorRail, handleChange)}
      </>
    );
  };

  const renderMono = () => {
    return (
      <>
        {colorDropdown(
          "Pick A Color",
          "monoColor",
          data.monoColor,
          handleChange
        )}
      </>
    );
  };

  const content = (
    <div className="flex-col">
      <div className="button-container">
        <button
          type="button"
          className="button"
          name="typeColor"
          value="mono"
          onClick={handleChange}
        >
          Monocolor
        </button>
        <button
          type="button"
          className="button"
          name="typeColor"
          value="custom"
          onClick={handleChange}
        >
          Custom
        </button>
      </div>
      {data.typeColor === "custom" ? renderCustom() : renderMono()}
    </div>
  );

  return content;
};
export default Colors;
