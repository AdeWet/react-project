const CartItem = ({
  image,
  title,
  price,
  quantity,
  addItem,
  removeItem,
}: {
  image: string;
  title: string;
  price: string;
  quantity: number;
  addItem: () => void;
  removeItem: () => void;
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-x-6">
      <figure className="row-span-3 object-scale-down w-20">
        <img src={image} alt="Product" />
      </figure>
      <div className="col-span-2">{title}</div>
      <div className="flex flex-row font-medium text-xl items-center py-3">
        <button className="btn btn-sm" onClick={removeItem}>
          -
        </button>
        <div className="px-2">{quantity}</div>
        <button className="btn btn-sm" onClick={addItem}>
          +
        </button>
      </div>
      <div className="font-semibold text-xl self-center justify-self-end">
        {price}
      </div>
      <div></div>
      <button className="btn btn-sm btn-warning self-center justify-self-end">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
