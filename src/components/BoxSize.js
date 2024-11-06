import React from "react";
import useFormContext from "../hooks/useFormContext";
import {
  boxSize250,
  boxSize300,
  boxSize350,
  boxSize180,
  boxSize205,
} from "../assets/images";

const BoxSize = () => {
  const { data, handleChange } = useFormContext();

  const handleRadioChange = (event) => {
    handleChange({ target: { name: "boxSize", value: event.target.value } });
  };

  return (
    <div className="flex-col">
      <div className="split-container">
        <label
          htmlFor="box180"
          className={`radio-label ${
            data.boxSize === "box180" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={boxSize180} alt="Box Size 180" />
          <input
            type="radio"
            id="box180"
            name="boxSize"
            value="box180"
            onChange={handleRadioChange}
            checked={data.boxSize === "box180"}
          />
          180
        </label>
        <label
          htmlFor="box205"
          className={`radio-label ${
            data.boxSize === "box205" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={boxSize205} alt="Box Size 180" />
          <input
            type="radio"
            id="box205"
            name="boxSize"
            value="box205"
            onChange={handleRadioChange}
            checked={data.boxSize === "box205"}
          />
          205
        </label>
        <label
          htmlFor="box250"
          className={`radio-label ${
            data.boxSize === "box250" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={boxSize250} alt="Box Size 250" />
          <input
            type="radio"
            id="box250"
            name="boxSize"
            value="box250"
            onChange={handleRadioChange}
            checked={data.boxSize === "box250"}
          />
          250
        </label>
        <label
          htmlFor="box300"
          className={`radio-label ${
            data.boxSize === "box300" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={boxSize300} alt="Box Size 300" />
          <input
            type="radio"
            id="box300"
            name="boxSize"
            value="box300"
            onChange={handleRadioChange}
            checked={data.boxSize === "box300"}
          />
          300
        </label>
        <label
          htmlFor="box350"
          className={`radio-label ${
            data.boxSize === "box350" && "radio-label-selected"
          }`}
        >
          <img className="form-image" src={boxSize350} alt="Box Size 350" />
          <input
            type="radio"
            id="box350"
            name="boxSize"
            value="box350"
            onChange={handleRadioChange}
            checked={data.boxSize === "box350"}
          />
          350
        </label>
      </div>
    </div>
  );
};

export default BoxSize;
