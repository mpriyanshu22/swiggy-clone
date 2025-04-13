import {createSlice} from "@reduxjs/toolkit";

const cart=createSlice({
  name:'cartslice',
  initialState:{
    items:[],
    count:0,
  },
  reducers:{
    addItems: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    
    IncrementItems: (state, action) => {
      const element = state.items.find(item => item.id === action.payload.id);
      if (element) {
        element.quantity += 1;
      }
      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    
    DecrementItems: (state, action) => {
      const element = state.items.find(item => item.id === action.payload.id);
      if (element) {
        if (element.quantity > 1) {
          element.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
      state.count = state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    
  }
})

export const {addItems,IncrementItems,DecrementItems}=cart.actions;
export default cart.reducer;