import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ReviewState } from "../../interfaces/interfaces";

export const useReviewStore = create<ReviewState>()(
  devtools(
    persist(
      (set) => ({
        reviews: [],
        addReview: (id, customerName, review) =>
          set((state) => {
            return {
              reviews: [
                ...state.reviews,
                {
                  productId: id,
                  customerName: customerName,
                  review: review,
                },
              ],
            };
          }),
      }),
      {
        name: "review-storage",
      }
    )
  )
);
