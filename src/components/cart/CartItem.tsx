import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { priceInRands } from "../../utils";

const CartItem = ({
  id,
  image,
  title,
  price,
  quantity,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeCartItem,
}: {
  id: number;
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
        <Link
          className="row-span-2"
          to={`../browse/${id}`}
          aria-label="Product information"
        >
          <figure className=" lg:w-1/2 md:w-1/2 bg-white p-4 flex justify-center items-center">
            <img className="h-16 object-scale-down" src={image} alt="Product" />
          </figure>
        </Link>
        <div className="col-span-2 truncate">{title}</div>
        <div className="grid grid-flow-col font-medium text-xl items-center justify-between">
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={decreaseItemQuantity}
            aria-label="decrease quantity of this item by 1"
          >
            <FaMinus />
          </button>
          <div className="text-lg md:text-xl lg:text-xl">{quantity}</div>
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={increaseItemQuantity}
            aria-label="increase quantity of this item by 1"
          >
            <FaPlus />
          </button>
        </div>
        <div className="font-semibold text-lg md:text-xl lg:text-xl self-center justify-self-end">
          {totalPrice()}
        </div>
      </div>
      <div className="flex justify-end pr-6">
        <button
          className="btn btn-sm btn-warning btn-square btn-outline self-end"
          onClick={removeCartItem}
          aria-label="remove all of this item from cart"
        >
          <FaTrash />
        </button>
      </div>

      <div className="m-1 divider"></div>
    </>
  );
};

export default CartItem;
