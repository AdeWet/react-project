import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductInformation } from "../../api/fakestoreApi";
import { priceInRands } from "../../utils";
import { useCartStore } from "../stores/useCartStore";
import AddProductReview from "./AddProductReview";

const ProductInfoPage = () => {
  const { productId } = useParams();

  const query = useQuery({
    queryKey: [productId],
    queryFn: () => getProductInformation(productId),
  });
  const { adjustItemQuantity } = useCartStore();

  if (!query.data) {
    return;
  }

  return (
    <div className="p-4 flex flex-col">
      <div>
        <div className="text-xl pb-2 font-semi-bold">{query.data?.title}</div>
        <figure className="w-full flex p-6 bg-white justify-center">
          <img
            className="w-4/6 object-scale-down"
            src={query.data?.image}
            alt="ProductInfo"
          />
        </figure>
        <div className="divider"></div>
      </div>
      <div>
        <div className="text-lg font-semi-bold">Description</div>
        <div className="font-extralight">{query.data.description}</div>
        <div className="divider"></div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="font-bold text-2xl self-center">
          {priceInRands(query.data.price ?? 0)}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => adjustItemQuantity(query.data.id, true)}
        >
          Add to Cart
        </button>
      </div>
      <AddProductReview></AddProductReview>
    </div>
  );
};

export default ProductInfoPage;
