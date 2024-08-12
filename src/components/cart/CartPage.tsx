import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
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
      {!cart.length ? (
        <NoItemsCard />
      ) : (
        <div className="p-4">
          <Link to={"/"} aria-label="Browse more products">
            <button className="btn btn-primary btn-outline">
              Continue Browsing
            </button>
          </Link>
          <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between flex-grow-0 flex-shrink-0 gap-8">
            <div className="pt-2 w-full">
              {cart.map((item) => (
                <CartItem
                  key={item.productId}
                  id={item.productId}
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
            <div className="self-end w-full lg:w-3/5 md:w-4/5 lg:sticky lg:bottom-0 md:sticky md:bottom-0">
              <div className="px-4 py-4">
                <div className="flex items-end justify-between">
                  <div className="font-light text-xl">Total:</div>
                  <div className="font-bold text-3xl">{cartTotal()}</div>
                </div>

                <button
                  className={`btn btn-primary text-primary-content w-full ${
                    cart.length ? "" : "btn-disabled"
                  }`}
                  aria-label="Go to checkout page"
                >
                  Checkout (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;

const NoItemsCard = () => {
  return (
    <div className="hero bg-base-200 h-svh -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">No items in your cart!</h1>
          <p className="py-6">Get shopping!</p>
          <Link className="btn btn-primary" to="/">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};
