import CustomerInfo from "./CustomerInfo"
import Width from "./Width"
import useFormContext from "../hooks/useFormContext"
import Height from "./Height"
import ManualOverride from "./ManualOverride"
import ControlUnitSide from "./ControlUnitSide"
import SlatProfile from "./SlatProfile"
import Endslat from "./Endslat"
import Guiderail from "./Guiderail"
import BoxSize from "./BoxSize"
import ExitStrap from "./ExitStrap"
import Colors from "./Colors"
import Drilling from "./Drilling"
import Extras from "./Extras"
import Price from "./Price"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <CustomerInfo />,
        1: <Width />,
        2: <Height />,
        3: <ManualOverride />,
        4: <ControlUnitSide />,
        5: <SlatProfile />,
        6: <Endslat />,
        7: <Guiderail />,
        8: <BoxSize />,
        9: <ExitStrap />,
        10: <Colors />,
        11: <Drilling />,
        12: <Extras />,
        13: <Price />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs