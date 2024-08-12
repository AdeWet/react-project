import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { priceInRands } from "../../utils";

const CartItem = ({
  image,
  title,
  price,
  quantity,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeCartItem,
}: {
  image: string;
  title: string;
  price: number;
  quantity: number;
  increaseItemQuantity: () => void;
  decreaseItemQuantity: () => void;
  removeCartItem: () => void;
}) => {
  function totalPrice(): string {
    return priceInRands(quantity * price);
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-6">
        <figure className="row-span-2 lg:w-1/2 md:w-1/2 bg-white p-4 flex justify-center items-center">
          <img className="h-16 object-scale-down" src={image} alt="Product" />
        </figure>
        <div className="col-span-2 truncate">{title}</div>
        <div className="grid grid-flow-col font-medium text-xl items-center justify-between">
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={decreaseItemQuantity}
          >
            <FaMinus />
          </button>
          <div>{quantity}</div>
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={increaseItemQuantity}
          >
            <FaPlus />
          </button>
        </div>
        <div className="font-semibold text-xl self-center justify-self-end">
          {totalPrice()}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-warning btn-square btn-outline self-end"
          onClick={removeCartItem}
        >
          <FaTrash />
        </button>
      </div>

      <div className="m-1 divider"></div>
    </>
  );
};

export default CartItem;
