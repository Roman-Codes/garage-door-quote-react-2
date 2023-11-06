import useFormContext from "../hooks/useFormContext"
import {overrideFront, overrideBack} from "../assets/images/"
const ManualOverride = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                    <img className="form-image" src={overrideFront} />

                    <img className="form-image" src={overrideBack} />
            </div>
            <div className="split-container">
                <div className="radio-container">
                    <label htmlFor="overrideFront">Front</label>
                    <input
                        type="radio"
                        id="overrideFront"
                        name="manualOverride"
                        value={data.manualOverride}
                        onChange={handleChange}
                        checked={data.manualOverride === 'overrideFront'}
                    />
                </div>
                <div className="radio-container">
                    <label htmlFor="overrideBack">Back</label>
                    <input
                        type="radio"
                        id="overrideBack"
                        name="manualOverride"
                        value={data.manualOverride}
                        onChange={handleChange}
                        checked={data.manualOverride === 'overrideBack'}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default ManualOverride