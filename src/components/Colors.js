import { useState } from "react";
import useFormContext from "../hooks/useFormContext";
import { colorDropdown } from "../utils/helpers";

const Colors = () => {
  const { data, handleChange } = useFormContext();
  const [option, setOption] = useState("mono");

  const handleClick = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

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
          "colorMono",
          data.colorMono,
          handleChange
        )}
      </>
    );
  };

  const content = (
    <div className="flex-col">
      <div>
        <button value="mono" onClick={handleClick}>
          Monocolor
        </button>
        <button value="custom" onClick={handleClick}>
          Custom
        </button>
      </div>
      {option === "custom" ? renderCustom() : renderMono()}
    </div>
  );

  return content;
};
export default Colors;
