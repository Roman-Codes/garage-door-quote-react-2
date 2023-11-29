import useFormContext from "../hooks/useFormContext";

const Price = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col">
      <div className="price-container">
        <label htmlFor="productPrice">Price</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          value={data.productPrice}
          placeholder="100500"
          onChange={handleChange}
        />
        <label htmlFor="productQuantity">Quantity</label>
        <input
          type="number"
          name="productQuantity"
          id="productQuantity"
          placeholder="42"
          value={data.productQuantity}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  return content;
};
export default Price;
