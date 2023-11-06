import useFormContext from "../hooks/useFormContext"
import  {generateMeasurementInputs} from "../utils/helpers"
import {height} from "../assets/images"

const Height = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <img className="height-image" src={height} />
            {generateMeasurementInputs('height', data, handleChange)}
        </div>
    )

    return content
}
export default Height