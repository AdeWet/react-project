import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/fakestoreApi";
import { useCartStore } from "../stores/useCartStore";
import ProductCard from "./ProductCard";

const BrowsePage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { adjustItemQuantity } = useCartStore();

  return (
    <>
      <div>
        {query.data?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            handleAddToCart={() => adjustItemQuantity(product.id, true)}
          />
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
