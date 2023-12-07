import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Customer Info",
    1: "Width",
    2: "Height",
    3: "Manual Override",
    4: "Control Unit Side",
    5: "Slat Profile",
    6: "Endslat",
    7: "Guiderail",
    8: "Box Size",
    9: "Exit Strap",
    10: "Colors",
    11: "Guiderail drilling",
    12: "Extras",
    13: "Price",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    customerEmail: "",
    measureTypeWidth: "metric",
    widthA: "",
    fractionA: 0,
    widthB: "",
    fractionB: 0,
    measureTypeHeight: "metric",
    heightC: "",
    fractionC: 0,
    heightD: "",
    fractionD: 0,
    constantHeight: 300,
    manualOverride: "",
    controlUnit: "",
    slatProfile: "",
    endslat: "",
    guiderail: "",
    boxSize: "",
    exitStrap: "",
    colorSlat: "",
    colorEndslat: "",
    colorBox: "",
    colorRail: "",
    drillingLeft: "",
    drillingRight: "",
    extras: "",
    productPrice: "",
    productQuantity: "",
  });

  const handleChange = (e) => {
    const type = e.target.type;
    e.preventDefault();
    const name = e.target.name;

    const id = e.target.id;

    const value =
      type === "radio"
        ? id
        : type === "textarea"
        ? e.target.value.split(", ")
        : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
    extras,
    heightC,
    heightD,
    widthA,
    widthB,
    fractionA,
    fractionB,
    fractionC,
    fractionD,
    ...requiredInputs
  } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("customer"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("width"))
    .map((key) => data[key])
    .some(Boolean);

  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("height"))
    .map((key) => data[key])
    .some(Boolean);

  const canNextPage4 = Object.keys(data)
    .filter((key) => key.startsWith("manual"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage5 = Object.keys(data)
    .filter((key) => key.startsWith("control"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage6 = Object.keys(data)
    .filter((key) => key.startsWith("slat"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage7 = Object.keys(data)
    .filter((key) => key.startsWith("endslat"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage8 = Object.keys(data)
    .filter((key) => key.startsWith("guiderail"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage9 = Object.keys(data)
    .filter((key) => key.startsWith("boxSize"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage10 = Object.keys(data)
    .filter((key) => key.startsWith("exitStrap"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage11 = Object.keys(data)
    .filter((key) => key.startsWith("color"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage12 = Object.keys(data)
    .filter((key) => key.startsWith("drilling"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage13 = true;

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3) ||
    (page === 3 && !canNextPage4) ||
    (page === 4 && !canNextPage5) ||
    (page === 5 && !canNextPage6) ||
    (page === 6 && !canNextPage7) ||
    (page === 7 && !canNextPage8) ||
    (page === 8 && !canNextPage9) ||
    (page === 9 && !canNextPage10) ||
    (page === 10 && !canNextPage11) ||
    (page === 11 && !canNextPage12) ||
    (page === 12 && !canNextPage13);

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
