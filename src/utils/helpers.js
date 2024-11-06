export const generateMeasurementInputs = (type, data, handleChange) => {
  const width = ["A", "B"];
  const height = ["C", "D", "E"];
  const measureArr = type === "width" ? width : height;

  return measureArr.map((string) => {
    return (
      <div className="split-container">
        <div className="radio-container">
          {string}:<label htmlFor={`feet${string}`}>Ft:</label>
          <input
            type="number"
            id={`${type}Feet${string}`}
            name={`${type}Feet${string}`}
            value={data[`${type}Feet${string}`]}
            onChange={handleChange}
            defaultValue={0}
          />
        </div>
        <div className="radio-container">
          <label htmlFor={`${type}Inch${string}`}>Inch:</label>
          <input
            type="number"
            id={`${type}Inch${string}`}
            name={`${type}Inch${string}`}
            value={data[`${type}Inch${string}`]}
            onChange={handleChange}
            defaultValue={0}
          />
        </div>
      </div>
    );
  });
};

export const colorDropdown = (label, id, value, onChange) => {
  return (
    <label htmlFor={id}>
      {label}:
      <select id={id} name={id} value={value || "disabed"} onChange={onChange}>
        <option value="disabed" defaultValue disabled>
          Pick Color
        </option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="darkBrown">Dark Brown</option>
        <option value="anthricite">Anthricite</option>
        <option value="grey">Grey</option>
      </select>
    </label>
  );
};

export const positionDropdown = (label, id, value, onChange) => {
  return (
    <label htmlFor={id}>
      {label}:
      <select id={id} name={id} value={value || "disabed"} onChange={onChange}>
        <option value="disabed" defaultValue disabled>
          Pick Position
        </option>
        <option value="inside">Inside</option>
        <option value="outside">Outside</option>
      </select>
    </label>
  );
};

export const positionDropdownSide = (
  label,
  id,
  value,
  onChange,
  selectedValue
) => {
  return (
    <label htmlFor={id}>
      {label}:
      <select id={id} name={id} value={value || "disabed"} onChange={onChange}>
        {!selectedValue && (
          <option value="disabed" defaultValue disabled>
            Pick Side
          </option>
        )}
        <option
          value="side A"
          defaultValue={selectedValue === "sideA"}
          disabled={selectedValue && selectedValue !== "sideA"}
        >
          Side A
        </option>
        <option
          value="Side B"
          defaultValue={selectedValue === "sideB"}
          disabled={selectedValue && selectedValue !== "sideB"}
        >
          Side B
        </option>
        <option
          value="Side A or B"
          defaultValue={selectedValue === "sideAB"}
          disabled={selectedValue && selectedValue !== "sideAB"}
        >
          Side A or B
        </option>
      </select>
    </label>
  );
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export const convertToMetric = (inch) => Math.floor(parseFloat(inch) * 25.4);

export const convertToImperial = (mm) => (parseFloat(mm) / 25.4).toFixed(3);

export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount);

export const camelToTitile = (str) => {
  const result = str.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};
