import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addItem: (item) =>
          set((state) => ({
            cart: [...state.cart, item],
          })),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
