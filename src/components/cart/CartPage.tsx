import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/fakestoreApi";
import { priceInRands } from "../../utils";
import { useCartStore } from "../stores/useCartStore";
import CartItem from "./CartItem";

const CartPage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const { cart, adjustItemQuantity, removeCartItem } = useCartStore();

  function cartTotal(): string {
    let total = 0;
    for (const item of cart) {
      const productPrice = query.data?.find(
        (product) => item.productId === product.id
      )?.price;
      if (productPrice) {
        total += item.quantity * productPrice;
      } else {
        return "Error getting Price";
      }
    }
    return priceInRands(total);
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between flex-grow-0 flex-shrink-0">
        {!cart.length ? (
          <>
            <div className="text-xl font-light">
              No items in your cart - get shopping!
            </div>
            <div className="divider"></div>
          </>
        ) : (
          <div className="p-4 w-full">
            {cart.map((item) => (
              <CartItem
                key={item.productId}
                image={
                  query.data?.find((product) => product.id == item.productId)
                    ?.image ?? ""
                }
                title={
                  query.data?.find((product) => product.id == item.productId)
                    ?.title ?? ""
                }
                price={
                  query.data?.find((product) => product.id == item.productId)
                    ?.price ?? 0
                }
                quantity={item.quantity}
                increaseItemQuantity={() =>
                  adjustItemQuantity(item.productId, true)
                }
                decreaseItemQuantity={() =>
                  adjustItemQuantity(item.productId, false)
                }
                removeCartItem={() => removeCartItem(item.productId)}
              />
            ))}
          </div>
        )}

        <div className="self-end w-full lg:w-2/5 md:w-4/5 lg:sticky lg:bottom-0 md:sticky md:bottom-0">
          <div className="px-4 py-2">
            <div className="flex items-end justify-between">
              <div className="font-semibold text-xl">Total:</div>
              <div className="font-bold text-3xl">{cartTotal()}</div>
            </div>

            <button
              className={`btn btn-primary text-primary-content w-full ${
                cart.length ? "" : "btn-disabled"
              }`}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
