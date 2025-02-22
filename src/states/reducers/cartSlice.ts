import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

type CartState = CartItem[];

export const fetchCart = createAsyncThunk<CartState>(
  "cart/fetchCart",
  async () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
);

export const saveCart = createAsyncThunk<void, CartState>(
  "cart/saveCart",
  async (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartState,
  reducers: {
    toggleCartItem: (
      state,
      action: PayloadAction<{ item: CartItem; checked: boolean }>
    ) => {
      const { item, checked } = action.payload;

      if (checked) {
        if (!state.find((i) => i.name === item.name)) {
          state.push(item);
        }
      } else {
        return state.filter((i) => i.name !== item.name);
      }
    },
    removeCartItem: (state, action: PayloadAction<{ name: string }>) => {
      return state.filter((i) => i.name !== action.payload.name);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        console.log(state);
        return action.payload;
      })
      .addCase(saveCart.fulfilled, () => {
        console.log("Cart saved to localStorage.");
      });
  },
});

export const { toggleCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
