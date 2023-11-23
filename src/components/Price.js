import useFormContext from "../hooks/useFormContext";
import { colorDropdown } from "../utils/helpers";

const Price = () => {
  const { data, handleChange } = useFormContext();
  console.log(data);
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
