import useFormContext from "../hooks/useFormContext";
import { pa_55, pa_77 } from "../assets/images";

const SlatProfile = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <img className="form-image" src={pa_55} />
        <img className="form-image" src={pa_77} />
      </div>
      <div className="split-container">
        <div className="radio-container">
          <label htmlFor="slat55">55</label>
          <input
            type="radio"
            id="slat55"
            name="slatProfile"
            value={data.slatProfile}
            onChange={handleChange}
            checked={data.slatProfile === "slat55"}
          />
        </div>
        <div className="radio-container">
          <label htmlFor="slat77">77</label>
          <input
            type="radio"
            id="slat77"
            name="slatProfile"
            value={data.slatProfile}
            onChange={handleChange}
            checked={data.slatProfile === "slat77"}
          />
        </div>
      </div>
    </div>
  );

  return content;
};
export default SlatProfile;
