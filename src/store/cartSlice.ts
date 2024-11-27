import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartState {
  cartItems: Product[];
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("cart") || "[]"),
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to cart
    addToCart(state, action: PayloadAction<Product>) {
      state.cartItems.push(action.payload);
    },
    //Loader start
    startLoading(state) {
      state.isLoading = true;
    },
    //Loader stop
    stopLoading(state) {
      state.isLoading = false;
    },

    handleCartQuantity(
      state,
      action: PayloadAction<{ id: number; type: string }>
    ) {
      const { id, type } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      if (product) {
        if (type === "increment") {
          product.quantity = product.quantity ? product.quantity + 1 : 2;
        } else {
          product.quantity = product.quantity ? product.quantity - 1 : 1;
        }
      }

      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === id && product) {
            return product;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, startLoading, stopLoading, handleCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
