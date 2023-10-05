import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.cartID === action.payload.cartID
      );
      if (item) {
        item.amount += action.payload.amount;
      } else {
        state.cartItems.push(action.payload);
      }

      state.numItemsInCart += action.payload.amount;
      state.cartTotal += action.payload.price * action.payload.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item addded to the cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.cartID === action.payload.cartID
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== action.payload.cartID
      );
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from the cart");
    },
    editItem: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.cartID === action.payload.cartID
      );
      state.numItemsInCart += action.payload.amount - product.amount;
      console.log(product.amount);
      state.cartTotal +=
        product.price * (action.payload.amount - product.amount);
      product.amount = action.payload.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
