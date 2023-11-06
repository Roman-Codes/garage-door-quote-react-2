import useFormContext from "../hooks/useFormContext"
import { colorDropdown } from "../utils/helpers"

const Colors = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                {colorDropdown("Slat" ,'colorSlat', data.colorSlat, handleChange)}
                {colorDropdown("Endslat",'colorEndslat', data.colorEndslat, handleChange)}
                {colorDropdown("Box",'colorBox', data.colorBox, handleChange)}
                {colorDropdown("Guiderail",'colorRail', data.colorRail, handleChange)}
            </div>
        </div>
    )

    return content
}
export default Colors