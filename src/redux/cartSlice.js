import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id)
      if (existItem) {
       return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 }:item ))
      }else{
        state.push(action.payload);
      }
       
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    }
  }
});

export const { addItem, removeItem } = cartslice.actions
export default cartslice.reducer