import useFormContext from "../hooks/useFormContext"
import { colorDropdown } from "../utils/helpers"

const Extras = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            (Please separate by comas)
            <textarea
                className="p-2"
                name="extras"
                onChange={handleChange}
                velue={data.extras}
            >
            </textarea>
        </div>
    )

    return content
}
export default Extras