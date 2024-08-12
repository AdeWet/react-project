import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../../api/fakestoreApi";
import GenericErrorPage from "../generic/GenericErrorPage";
import GenericLoader from "../generic/GenericLoader";
import GenericToast from "../generic/GenericToast";
import { useCartStore } from "../stores/useCartStore";
import ProductCard from "./ProductCard";

const BrowsePage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [isShowingToast, changeIsShowingToast] = useState(false);

  const { adjustItemQuantity } = useCartStore();

  if (query.isLoading) {
    return <GenericLoader />;
  }

  if (query.error) {
    return (
      <GenericErrorPage
        error={{
          title: "Oopsie Daisy",
          message: "Failed to get products, try again later",
          buttonText: "",
        }}
      />
    );
  }

  function handleAddToCart(productId: number) {
    adjustItemQuantity(productId, true);
    changeIsShowingToast(true);
    setTimeout(() => changeIsShowingToast(false), 1500);
  }

  return (
    <div>
      {isShowingToast && <GenericToast message="Item added to your cart" />}
      <div className="w-svw p-2 xl:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 gap-2 justify-center">
        {query.data?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            handleAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
