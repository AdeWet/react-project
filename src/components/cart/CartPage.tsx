import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/fakestoreApi";
import { useCartStore } from "../stores/useCartStore";

const CartPage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const { cart } = useCartStore();

  return (
    <>
      <div>
        <h2>My Cart</h2>

        {cart.map((item) => (
          <div>
            {
              query.data?.find((product) => product.id === item.productId)
                ?.title
            }
          </div>
        ))}

        <button className="btn btn-primary text-primary-content">
          Make Payment
        </button>
      </div>
    </>
  );
};

export default CartPage;
