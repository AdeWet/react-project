import { Review } from "../../interfaces/interfaces";
import ReviewCard from "./ReviewCard";

const ReviewContainer = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <div className="pb-2 font-medium text-lg underline">Reviews</div>
      {reviews.length === 0 && <div>No reviews yet.</div>}
      <div className="flex flex-col pr-4 gap-2">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName + "_" + review.review}
            customerName={review.customerName}
            review={review.review}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
