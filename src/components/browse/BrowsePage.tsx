import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
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
          <Link key={product.id} to={`${product.id}`}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              handleAddToCart={() => adjustItemQuantity(product.id, true)}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
