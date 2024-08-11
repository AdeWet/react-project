import { Review } from "../stores/useReviewStore";
import ReviewCard from "./ReviewCard";

const ReviewContainer = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <div className="pb-2 font-medium">Reviews:</div>
      <div className="flex flex-col pr-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            review={review.review}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
