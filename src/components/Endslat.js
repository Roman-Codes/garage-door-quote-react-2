import useFormContext from "../hooks/useFormContext"
import { ldg_d, ldg_s } from "../assets/images"

const Endslat = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <img className="form-image" src={ldg_s} />
                <img className="form-image" src={ldg_d}  />         
            </div>

            <div className="split-container">
                <div className="radio-container">
                    <label htmlFor="ldgD">LGD&#8209;S</label>
                    <input
                        type="radio"
                        id="ldgS"
                        name="endslat"
                        value={data.endslat}
                        onChange={handleChange}
                        checked={data.endslat === 'ldgD'}
                    />
                </div>
                <div className="radio-container">
                    <label htmlFor="ldgD">LGD&#8209;D</label>
                    <input
                        type="radio"
                        id="ldgD"
                        name="endslat"
                        value={data.endslat}
                        onChange={handleChange}
                        checked={data.endslat === 'ldgD'}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Endslat