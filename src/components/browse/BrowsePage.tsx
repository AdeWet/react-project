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

  if (query.isLoading) {
    return (
      <div className="h-svh -my-16 flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-svw p-2 xl:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 gap-2 justify-center">
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
  );
};

export default BrowsePage;
