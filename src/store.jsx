import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./features/cart/CartSlice";
import userReducer from "./features/user/userSlice";
const store = configureStore({
  reducer: {
    CartState: CartReducer,
    userState: userReducer,
  },
});

export default store;
