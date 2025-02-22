import { configureStore, Middleware } from "@reduxjs/toolkit";
import cartReducer, { saveCart } from "./reducers/cartSlice";

const cartPersistenceMiddleware: Middleware<{}, RootState> =
  (store) => (next: any) => (action: any) => {
    const result = next(action);
    const saveActions = new Set(["cart/toggleCartItem", "cart/removeCartItem"]);

    if (saveActions.has(action.type)) {
      store.dispatch(saveCart(store.getState().cart) as any);
    }

    return result;
  };

export const store: any = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartPersistenceMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
