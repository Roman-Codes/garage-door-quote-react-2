import useFormContext from "../hooks/useFormContext"
import { colorDropdown } from "../utils/helpers"
import { drillingSide, drillingTop } from "../assets/images"
const Drilling = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div>
                    TOP: 
                    <img className="form-image" src={drillingTop} />
                </div>
                <div>
                    SIDE: 
                    <img className="form-image" src={drillingSide} />
                </div>
            </div>
            <div className="split-container">
                <label>
                Left:
                <select id="drillingLeft"
                    name="drillingLeft"
                    onChange={handleChange}
                    value={data.drilllingLeft}
                >
                    <option disabled selected >Pick drilling option</option>
                    <option value="side">Side</option>
                    <option value="top">Top</option>
                </select>
                </label>
                <label>
                    Right:
                    <select id="drillingRight"
                        name="drillingRight"
                        onChange={handleChange}
                        value={data.drilllingRight}
                    >
                        <option disabled selected >Pick drilling option</option>
                        <option value="side">Side</option>
                        <option value="top">Top</option>
                    </select>
                </label>
            </div>
        </div>
    )

    return content
}
export default Drilling