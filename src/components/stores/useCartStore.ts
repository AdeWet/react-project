import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (id: number) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addItem: (id) =>
          set((state) => ({
            cart: [
              ...state.cart,
              {
                productId: id,
                quantity: 1,
              },
            ],
          })),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
