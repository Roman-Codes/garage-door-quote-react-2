import useFormContext from "../hooks/useFormContext"
import {height} from "../assets/images"

const Height = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <img className="height-image" src={height} />
            <div className="measurement-inputs">
                <div className="flex-col">
                    <label htmlFor="heightC">C(mm):</label>
                    <input
                        type="number"
                        id="heightC"
                        name="heightC"
                        placeholder="0"
                        value={data.heightC}
                        onChange={handleChange}
                        disabled={data.heightD !== "0" && data.heightD}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="heightD">D(mm):</label>
                    <input
                        type="number"
                        id="heightD"
                        name="heightD"
                        placeholder="0"
                        value={data.heightD}
                        onChange={handleChange}
                        disabled={data.heightC !== "0" && data.heightC}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Height