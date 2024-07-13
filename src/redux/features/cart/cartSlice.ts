// src/slices/cartSlice.ts

import { TProduct } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  product: TProduct;
  quantity: number;
};

type TCartState = {
  items: CartItem[];
  totalAmount: number;
};

const initialState: TCartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        item => item.product._id === newItem.product._id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      state.totalAmount += newItem.product.price * newItem.quantity;
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product._id === id);

      if (existingItem && quantity > 0) {
        state.totalAmount +=
          (quantity - existingItem.quantity) * existingItem.product.price;
        existingItem.quantity = quantity;
      }
    },

    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const existingItem = state.items.find(item => item.product._id === id);

      if (existingItem) {
        state.items = state.items.filter(item => item.product._id !== id);
        state.totalAmount -= existingItem.product.price * existingItem.quantity;
      }
    },

    clearCart: state => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
