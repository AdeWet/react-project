export interface GenericError {
  title: string;
  message: string;
  buttonText: string;
}

interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  adjustItemQuantity: (id: number, isIncrease: boolean) => void;
  removeCartItem: (id: number) => void;
}

export interface Review {
  productId: number;
  customerName: string;
  review: string;
}

export interface ReviewState {
  reviews: Review[];
  addReview: (id: number, customerName: string, review: string) => void;
}
