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
          set((state) => {
            if (state.cart.find((product) => product.productId === id)) {
              return {
                cart: state.cart.map((item) => {
                  if (item.productId === id) {
                    return {
                      ...item,
                      quantity: item.quantity + 1,
                    };
                  } else {
                    return item;
                  }
                }),
              };
            } else {
              return {
                cart: [
                  ...state.cart,
                  {
                    productId: id,
                    quantity: 1,
                  },
                ],
              };
            }
          }),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
