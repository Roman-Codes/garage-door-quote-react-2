import useFormContext from "../hooks/useFormContext";
import { height } from "../assets/images";

const Height = () => {
  const { data, handleChange } = useFormContext();

  const form =
    data.measureTypeHeight === "metric" ? (
      <div className="flex-col">
        <img className="height-image" src={height} />
        <div className="measurement-inputs">
          <div className="flex-col">
            <label htmlFor="heightC">C(mm):</label>
            <input
              type="number"
              id="heightC"
              name="heightC"
              placeholder="0"
              value={data.heightC}
              onChange={handleChange}
              disabled={data.heightD !== "0" && data.heightD}
            />
          </div>
          <div className="flex-col">
            <label htmlFor="heightD">D(mm):</label>
            <input
              type="number"
              id="heightD"
              name="heightD"
              placeholder="0"
              value={data.heightD}
              onChange={handleChange}
              disabled={data.heightC !== "0" && data.heightC}
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex-col">
        <img className="height-image" src={height} />
        <div className="measurement-inputs">
          <div className="flex-row">
            <label htmlFor="heightC">C(inch):</label>
            <input
              type="number"
              id="heightC"
              name="heightC"
              placeholder="0"
              value={data.heightC}
              onChange={handleChange}
              disabled={data.heightD !== "0" && data.heightD}
            />
            <select
              name="fractionC"
              value={data.fractionC}
              onChange={handleChange}
              disabled={data.heightD !== "0" && data.heightD}
            >
              <option value={0}>0</option>
              <option value={0.125}>1/8</option>
              <option value={0.25}>1/4</option>
              <option value={0.375}>3/8</option>
              <option value={0.5}>1/2</option>
              <option value={0.625}>5/8</option>
              <option value={0.75}>3/4</option>
              <option value={0.875}>7/9</option>
            </select>
          </div>
          <div className="flex-row">
            <label htmlFor="heightD">D(inch):</label>
            <input
              type="number"
              id="heightD"
              name="heightD"
              placeholder="0"
              value={data.heightD}
              onChange={handleChange}
              disabled={data.heightC !== "0" && data.heightC}
            />
            <select
              value={data.fractionD}
              name="fractionD"
              onChange={handleChange}
              disabled={data.heightC !== "0" && data.heightC}
            >
              <option value={0}>0</option>
              <option value={0.125}>1/8</option>
              <option value={0.25}>1/4</option>
              <option value={0.375}>3/8</option>
              <option value={0.5}>1/2</option>
              <option value={0.625}>5/8</option>
              <option value={0.75}>3/4</option>
              <option value={0.875}>7/9</option>
            </select>
          </div>
        </div>
      </div>
    );
//TODO: add D-left, D-right
  const content = (
    <>
      <div className="container">
        <div className="button-container">
          <button
            type="button"
            className="button"
            name="measureTypeHeight"
            value={"metric"}
            onClick={handleChange}
          >
            Metric
          </button>
          <button
            type="button"
            className="button"
            name="measureTypeHeight"
            value={"imperial"}
            onClick={handleChange}
          >
            Imperial
          </button>
        </div>

        {form}
      </div>
    </>
  );

  return content;
};
export default Height;
