export const generateMeasurementInputs = (type, data, handleChange) => {
    const width = ['A', 'B'];
    const height = ['C', 'D', 'E'];
    const measureArr = type === 'width' ? width : height;

    return measureArr.map( string => {
        return <div className="split-container">
            <div className="radio-container">
            {string}:
            <label htmlFor={`feet${string}`}>Ft:</label>
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
    })
}

export const colorDropdown = (label, id, value, onChange) => {
    return <label htmlFor={id}>
        {label}:
        <select
            id={id}
            name={id}
            value={value || "disabed"}
            onChange={onChange}
        >
            <option value="disabed" selected disabled>Pick Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="darkBrown">Dark Brown</option>
            <option value="anthricite">Anthricite</option>
            <option value="grey">Grey</option>
        </select>
    </label>
    
}

export const formatDate = (date) => {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    
    if (month.length < 2) 
    month = '0' + month;
    if (day.length < 2) 
    day = '0' + day;
  
    return [day, month, year].join('/');
  }