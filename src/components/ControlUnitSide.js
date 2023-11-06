import useFormContext from "../hooks/useFormContext"
import { controlLeft, controlRight } from "../assets/images/"

const ControlUnitSide = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <img className="form-image" src={controlLeft} />
                <img className="form-image" src={controlRight} />
            </div>
            <div className="split-container">
                <div className="radio-container">
                    <label htmlFor="unitLeft">Left</label>
                    <input
                        type="radio"
                        id="unitLeft"
                        name="controlUnit"
                        value={data.controlUnit}
                        onChange={handleChange}
                        checked={data.controlUnit === 'unitLeft'}
                    />
                </div>
                <div className="radio-container">
                    <label htmlFor="unitRight">Right</label>
                    <input
                        type="radio"
                        id="unitRight"
                        name="controlUnit"
                        value={data.controlUnit}
                        onChange={handleChange}
                        checked={data.controlUnit === 'unitRight'}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default ControlUnitSide