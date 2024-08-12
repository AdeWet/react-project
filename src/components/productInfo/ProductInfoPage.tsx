import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductInformation } from "../../api/fakestoreApi";
import { priceInRands } from "../../utils";
import CartItemAddedToast from "../browse/CartItemAddedToast";
import { useCartStore } from "../stores/useCartStore";
import { useReviewStore } from "../stores/useReviewStore";
import AddProductReview from "./AddProductReview";
import ReviewContainer from "./ReviewContainer";

const ProductInfoPage = () => {
  const { productId } = useParams();
  const [isReviewing, changeReviewingState] = useState(false);
  const [isShowingToast, changeIsShowingToast] = useState(false);

  const query = useQuery({
    queryKey: [productId],
    queryFn: () => getProductInformation(productId),
  });
  const { adjustItemQuantity } = useCartStore();
  const { reviews } = useReviewStore();
  const navigate = useNavigate();

  if (!query.data) {
    return;
  }

  function handleSubmitButton() {
    changeReviewingState(false);
  }

  function handleAddToCart(productId: number) {
    adjustItemQuantity(productId, true);
    changeIsShowingToast(true);
    setTimeout(() => changeIsShowingToast(false), 1500);
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      {isShowingToast && <CartItemAddedToast />}

      <button
        className="btn btn-primary btn-outline self-start"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <figure className="h-96 flex p-6 bg-white justify-center">
          <img
            className="w-4/6 object-scale-down"
            src={query.data?.image}
            alt="ProductInfo"
          />
        </figure>
        <div className="flex flex-col gap-2 justify-between">
          <div>
            <div className="text-xl pb-2 font-semi-bold">
              {query.data.title}
            </div>
            <div className="text-lg font-semi-bold">Description</div>
            <div className="font-extralight">{query.data.description}</div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="font-bold text-2xl self-center">
              {priceInRands(query.data.price ?? 0)}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(query.data.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="divider -m-0 lg:col-span-2 md:col-span-2"></div>
        <div>
          <button
            className="btn btn-secondary text-secondary-content"
            onClick={() => changeReviewingState(!isReviewing)}
          >
            {!isReviewing ? "Write a Review" : "Cancel"}
          </button>
          {isReviewing && (
            <AddProductReview
              productId={query.data.id}
              handleSubmitButton={handleSubmitButton}
            ></AddProductReview>
          )}
        </div>
        <ReviewContainer
          reviews={reviews.filter(
            (review) => review.productId === query.data.id
          )}
        ></ReviewContainer>
      </div>
    </div>
  );
};

export default ProductInfoPage;
