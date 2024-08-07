import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  adjustItemQuantity: (id: number, isIncrease: boolean) => void;
  removeCartItem: (id: number) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        adjustItemQuantity: (id, isIncrease) =>
          set((state) => {
            if (state.cart.find((product) => product.productId === id)) {
              if (
                state.cart.find((product) => product.productId === id)
                  ?.quantity === 1 &&
                !isIncrease
              ) {
                return {
                  ...state,
                  cart: state.cart.filter((item) => item.productId != id),
                };
              }
              return {
                cart: state.cart.map((item) => {
                  if (item.productId === id) {
                    return {
                      ...item,
                      quantity: isIncrease
                        ? item.quantity + 1
                        : item.quantity - 1,
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
        removeCartItem: (id) =>
          set((state) => {
            return {
              ...state,
              cart: state.cart.filter((item) => item.productId != id),
            };
          }),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
