import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/fakestoreApi";
import { useCartStore } from "../stores/useCartStore";
import CartItem from "./CartItem";

const CartPage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const { cart, addItem } = useCartStore();

  return (
    <>
      <div className="flex flex-col flex-grow-0 flex-shrink-0 p-4">
        {cart.map((item) => (
          <>
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
              addItem={() => addItem(item.productId, true)}
              removeItem={() => addItem(item.productId, false)}
            />
            <div className="divider"></div>
          </>
        ))}
        <button className="btn btn-primary text-primary-content">
          Make Payment
        </button>
      </div>
    </>
  );
};

export default CartPage;
