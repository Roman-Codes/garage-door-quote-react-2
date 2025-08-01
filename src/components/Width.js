import useFormContext from "../hooks/useFormContext";
import { width } from "../assets/images/";

const Width = () => {
  const { data, handleChange } = useFormContext();

  const form =
    data.measureTypeWidth === "metric" ? (
      <div className="flex-col">
        <div className="width-image-container">
          <img src={width} />
        </div>
        <div className="measurement-inputs">
          <div className="flex-col">
            <label htmlFor="widthA">A(mm):</label>
            <input
              type="number"
              id="widthA"
              name="widthA"
              placeholder="0"
              value={data.widthA}
              onChange={handleChange}
              disabled={data.widthB !== "0" && data.widthB}
            />
          </div>
          <div className="flex-col">
            <label htmlFor="widthB">B(mm):</label>
            <input
              type="number"
              id="widthB"
              name="widthB"
              placeholder="0"
              value={data.widthB}
              onChange={handleChange}
              disabled={data.widthA !== "0" && data.widthA}
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex-col">
        <div className="width-image-container">
          <img src={width} />
        </div>
        <div className="measurement-inputs">
          <div className="flex-row">
            <label htmlFor="widthA">A(inch):</label>
            <input
              type="number"
              id="widthA"
              name="widthA"
              placeholder="0"
              value={data.widthA}
              onChange={handleChange}
              disabled={data.widthB !== "0" && data.widthB}
            />
            <select
              name="fractionA"
              value={data.fractionA}
              onChange={handleChange}
              disabled={data.widthB !== "0" && data.widthB}
            >
              <option value={0}>0</option>
              <option value={0.125}>1/8</option>
              <option value={0.25}>1/4</option>
              <option value={0.375}>3/8</option>
              <option value={0.5}>1/2</option>
              <option value={0.625}>5/8</option>
              <option value={0.75}>3/4</option>
              <option value={0.875}>7/8</option>
            </select>
          </div>
          <div className="flex-row">
            <label htmlFor="widthB">B(inch):</label>
            <input
              type="number"
              id="widthB"
              name="widthB"
              placeholder="0"
              value={data.widthB}
              onChange={handleChange}
              disabled={data.widthA !== "0" && data.widthA}
            />
            <select
              value={data.fractionB}
              name="fractionB"
              onChange={handleChange}
              disabled={data.widthA !== "0" && data.widthA}
            >
              <option value={0}>0</option>
              <option value={0.125}>1/8</option>
              <option value={0.25}>1/4</option>
              <option value={0.375}>3/8</option>
              <option value={0.5}>1/2</option>
              <option value={0.625}>5/8</option>
              <option value={0.75}>3/4</option>
              <option value={0.875}>7/8</option>
            </select>
          </div>
        </div>
      </div>
    );

  const content = (
    <>
      <div className="container">
        <div className="button-container">
          <button
            type="button"
            className="button"
            name="measureTypeWidth"
            value={"metric"}
            onClick={handleChange}
          >
            Metric
          </button>
          <button
            type="button"
            className="button"
            name="measureTypeWidth"
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
export default Width;
