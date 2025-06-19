import useFormContext from "../hooks/useFormContext";
import { pa_55, pa_77, pa_40 } from "../assets/images";

const SlatProfile = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="slat40"
          className={`radio-label ${
            data.slatProfile === "slat40" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={pa_40} />
          <input
            type="radio"
            id="slat40"
            name="slatProfile"
            value={data.slatProfile}
            onChange={handleChange}
            checked={data.slatProfile === "slat40"}
          />
          40
        </label>
        <label
          htmlFor="slat55"
          className={`radio-label ${
            data.slatProfile === "slat55" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={pa_55} />
          <input
            type="radio"
            id="slat55"
            name="slatProfile"
            value={data.slatProfile}
            onChange={handleChange}
            checked={data.slatProfile === "slat55"}
          />
          55
        </label>
        <label
          htmlFor="slat77"
          className={`radio-label ${
            data.slatProfile === "slat77" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={pa_77} />
          <input
            type="radio"
            id="slat77"
            name="slatProfile"
            value={data.slatProfile}
            onChange={handleChange}
            checked={data.slatProfile === "slat77"}
          />
          77
        </label>
      </div>
    </div>
  );

  return content;
};
export default SlatProfile;
