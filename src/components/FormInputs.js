import CustomerInfo from "./CustomerInfo";
import Width from "./Width";
import useFormContext from "../hooks/useFormContext";
import Height from "./Height";
import Operation from "./Operation";
import ManualOverride from "./ManualOverride";
import ControlUnitSide from "./ControlUnitSide";
import SlatProfile from "./SlatProfile";
// import Endslat from "./Endslat";
import Guiderail from "./Guiderail";
import BoxSize from "./BoxSize";
import ExitStrap from "./ExitStrap";
import Colors from "./Colors";
import Drilling from "./Drilling";
import Extras from "./Extras";
import Price from "./Price";

const FormInputs = () => {
  const { page } = useFormContext();

  // const display = {
  //   0: <CustomerInfo />,
  //   1: <Width />,
  //   2: <Height />,
  //   3: <Operation />,
  //   4: <ManualOverride />,
  //   5: <ControlUnitSide />,
  //   6: <SlatProfile />,
  //   // 7: <Endslat />,
  //   7: <Guiderail />,
  //   8: <BoxSize />,
  //   9: <ExitStrap />,
  //   10: <Colors />,
  //   11: <Drilling />,
  //   12: <Extras />,
  //   13: <Price />,
  // };

  const display = [
    <CustomerInfo />,
    <Width />,
    <Height />,
    <Operation />,
    <ManualOverride />,
    <ControlUnitSide />,
    <SlatProfile />,
    // <Endslat />,
    <Guiderail />,
    <BoxSize />,
    <ExitStrap />,
    <Colors />,
    <Drilling />,
    <Extras />,
    <Price />,
  ];

  const content = <div className="form-inputs flex-col">{display.map(input => <div className="form-input">{input}</div>)}</div>;

  return content;
};
export default FormInputs;
