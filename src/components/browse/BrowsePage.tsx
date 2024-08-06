import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/fakestoreApi";
import ProductCard from "./ProductCard";

const BrowsePage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <div>
        {query.data?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
