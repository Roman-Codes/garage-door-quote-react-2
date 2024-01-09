import useFormContext from "../hooks/useFormContext";
import { boxSize250, boxSize300 } from "../assets/images";
const BoxSize = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <img className="form-image" src={boxSize250} />
        <img className="form-image" src={boxSize300} />
      </div>
      <div className="split-container">
        <div className="radio-container">
          <label htmlFor="box250">250</label>
          <input
            type="radio"
            id="box250"
            name="boxSize"
            value={data.boxSize}
            onChange={handleChange}
            checked={data.boxSize === "box250"}
          />
        </div>
        <div className="radio-container">
          <label htmlFor="box300">300</label>
          <input
            type="radio"
            id="box300"
            name="boxSize"
            value={data.boxSize}
            onChange={handleChange}
            checked={data.boxSize === "box300"}
          />
        </div>
      </div>
    </div>
  );

  return content;
};
export default BoxSize;
