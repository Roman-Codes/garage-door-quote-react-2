import useFormContext from "../hooks/useFormContext";

const Extras = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      (Please separate by comas)
      <textarea
        className="p-2"
        name="extras"
        onChange={handleChange}
        value={data.extras}
      >
        {data.extras}
      </textarea>
    </div>
  );

  return content;
};
export default Extras;
