import useFormContext from "../hooks/useFormContext";
import { pp_110, pp_75, pp_89 } from "../assets/images";

const Guiderail = () => {
  const { data, handleChange } = useFormContext();

  const guiderailOptions = [
    { id: "pp66", label: "PP66", image: pp_75 },
    { id: "pp75", label: "PP75", image: pp_75 },
    { id: "pp89", label: "PP89", image: pp_89 },
    { id: "pp110", label: "PP110", image: pp_110 },
  ];

  const renderGuiderailOptions = () =>
    guiderailOptions.map((option) => (
      <label
        key={option.id}
        className={`${
          data.guiderail === option.id && "guiderail-label-selected"
        } guiderail-label`}
        htmlFor={option.id}
      >
        <img
          className="guiderail-image"
          src={option.image}
          alt={option.label}
        />
        <input
          type="radio"
          id={option.id}
          name="guiderail"
          value={option.id}
          onChange={handleChange}
          checked={data.guiderail === option.id}
        />
        {option.label}
      </label>
    ));

  return <div className="flex-col">{renderGuiderailOptions()}</div>;
};

export default Guiderail;
