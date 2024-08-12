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
      <div className="grid grid-cols-3 grid-rows-2 gap-x-2">
        <Link
          className="row-span-2 p-2"
          to={`../browse/${id}`}
          aria-label="Product information"
        >
          <figure className="md:w-1/2 bg-white p-4 flex justify-center items-center border border-white hover:border-primary">
            <img className="h-16 object-scale-down" src={image} alt="Product" />
          </figure>
        </Link>
        <div className="col-span-2 md:col-span-1 truncate">{title}</div>
        <div className="grid grid-cols-3 font-medium text-xl items-center gap-4 justify-items-center md:pl-20">
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={decreaseItemQuantity}
            aria-label="decrease quantity of this item by 1"
          >
            <FaMinus />
          </button>
          <div className="text-lg md:text-xl">{quantity}</div>
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={increaseItemQuantity}
            aria-label="increase quantity of this item by 1"
          >
            <FaPlus />
          </button>
        </div>
        <div className="md:col-span-2 font-semibold text-lg md:text-xl self-center justify-self-end">
          {totalPrice()}
        </div>
      </div>
      <div className="flex justify-end pr-6 md:pr-1">
        <button
          className="btn btn-sm btn-secondary btn-square btn-outline self-end"
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
