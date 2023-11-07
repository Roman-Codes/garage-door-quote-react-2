import useFormContext from "../hooks/useFormContext"
import {width} from "../assets/images/"

const Width = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="width-image-container">
                <img src={width} />
            </div>
            <div className="measurement-inputs">
                <div className="flex-col">
                    <label htmlFor="widthA">A(mm):</label>
                    <input
                        type="number"
                        id="widthA"
                        name="widthA"
                        placeholder="0"
                        value={data.widthA}
                        onChange={handleChange}
                        disabled={data.widthB !== "0" && data.widthB}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="widthB">B(mm):</label>
                    <input
                        type="number"
                        id="widthB"
                        name="widthB"
                        placeholder="0"
                        value={data.widthB}
                        onChange={handleChange}
                        disabled={data.widthA !== "0" && data.widthA}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Width