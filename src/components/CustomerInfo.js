import useFormContext from "../hooks/useFormContext";

const CustomerInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="flex-col">
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          placeholder="John Doe"
          value={data.customerName}
          onChange={handleChange}
        />
      </div>
      <div className="flex-col">
        <label htmlFor="customerAddress">Customer Address</label>
        <input
          type="text"
          id="customerAddress"
          name="customerAddress"
          placeholder="123 Random St."
          value={data.customerAddress}
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
          value={data.customerEmail}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  return content;
};
export default CustomerInfo;
