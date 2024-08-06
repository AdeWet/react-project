import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/fakestoreApi";
import ProductCard from "./ProductCard";

const BrowsePage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const handleAddToCart = () => {};

  return (
    <>
      <div>
        {query.data?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
