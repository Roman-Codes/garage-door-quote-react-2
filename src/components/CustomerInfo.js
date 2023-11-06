import useFormContext from "../hooks/useFormContext"

const CustomerInfo = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            {/* <div className="split-container"> */}
                <div className="flex-col">
                    <label htmlFor="customerName">Customer Name</label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        placeholder="Company Name"
                        // pattern="([A-Z])[\w+.]{1,}"
                        value={data.customerName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="customerPhone">Customer Phone:</label>
                    <input
                        type="text"
                        id="customerPhone"
                        name="customerPhone"
                        placeholder="(123) 456-1122"
                        // pattern="([A-Z])[\w+.]{1,}"
                        value={data.customerPhone}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="customerEmail">Customer Email</label>
                    <input
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        placeholder="example@somewhere.com"
                        // pattern="([A-Z])[\w+.]{1,}"
                        value={data.customerEmail}
                        onChange={handleChange}
                    />
                </div>
        </div>
    )

    return content
}
export default CustomerInfo