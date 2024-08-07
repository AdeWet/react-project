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
    <div className="grid grid-cols-3 grid-rows-3 gap-x-6">
      <figure className="row-span-3 object-scale-down w-20">
        <img src={image} alt="Product" />
      </figure>
      <div className="col-span-2">{title}</div>
      <div className="flex flex-row font-medium text-xl items-center py-3">
        <button className="btn btn-sm" onClick={decreaseItemQuantity}>
          -
        </button>
        <div className="px-2">{quantity}</div>
        <button className="btn btn-sm" onClick={increaseItemQuantity}>
          +
        </button>
      </div>
      <div className="font-semibold text-xl self-center justify-self-end">
        {totalPrice()}
      </div>
      <div></div>
      <button
        className="btn btn-sm btn-warning self-center justify-self-end"
        onClick={removeCartItem}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
