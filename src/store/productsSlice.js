import { createSlice } from '@reduxjs/toolkit';

const initialState = [
      {id: 1, title: 'Велосипед', count: 5},
      {id: 2, title: 'Самокат', count: 4},
      {id: 3, title: 'Гантели', count: 7},
      {id: 4, title: 'Ракетки', count: 1}
    ];

export const productsSlice = createSlice({
 name: 'products',
 initialState,
 reducers: {
   incrementCount: (state, action) => {
    if(state[action.payload - 1].count < 25){
      ++state[action.payload - 1].count
    }
   },
   decrementCount: (state, action) => {
    console.log(state[action.payload])
    if(state[action.payload - 1].count > 0){
      --state[action.payload - 1].count
    }
  },
  
   addProduct: (state, action) => {
    console.log(action.payload)
     state[action.payload.id - 1] = {id: action.payload.id, title: action.payload.name, count: action.payload.count};
   },
   removeProduct: (state, action) => {
     delete state[action.payload - 1]
   }
 },
});

export const { incrementCount, decrementCount, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
