import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Review {
  productId: number;
  customerName: string;
  review: string;
}

interface ReviewState {
  reviews: Review[];
  addReview: (id: number, customerName: string, review: string) => void;
}

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
