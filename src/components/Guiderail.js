import useFormContext from "../hooks/useFormContext";
import { pp_110, pp_75, pp_89 } from "../assets/images";

const Guiderail = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="radio-container guiderail-container">
        <label htmlFor="pp75"> PP75</label>
        <img className="guiderail-image" src={pp_75} />
        <input
          type="radio"
          id="pp75"
          name="guiderail"
          value={data.guiderail}
          onChange={handleChange}
          checked={data.guiderail === "pp75"}
        />
      </div>
      <div className="radio-container">
        <label htmlFor="pp89">PP89</label>
        <img className="guiderail-image" src={pp_89} />
        <input
          type="radio"
          id="pp89"
          name="guiderail"
          value={data.guiderail}
          onChange={handleChange}
          checked={data.guiderail === "pp89"}
        />
      </div>
      <div className="radio-container">
        <label htmlFor="pp110">PP110</label>
        <img className="guiderail-image" src={pp_110} />
        <input
          type="radio"
          id="pp110"
          name="guiderail"
          value={data.guiderail}
          onChange={handleChange}
          checked={data.guiderail === "pp110"}
        />
      </div>
    </div>
  );

  return content;
};
export default Guiderail;
