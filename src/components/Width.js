import useFormContext from "../hooks/useFormContext"
import  {generateMeasurementInputs} from "../utils/helpers"
import {width} from "../assets/images/"

const Width = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="width-image-container">
                <img src={width} />
            </div>
            <div className="measurement-inputs">
                    {generateMeasurementInputs('width', data, handleChange)}
            </div>
        </div>
    )

    return content
}
export default Width