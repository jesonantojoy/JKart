import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch data from the API
export const fetchdata = createAsyncThunk('data/fetchdata', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
});

const addItem = createSlice({
  name: 'data',
  initialState: {
    item: [],       // All items/products from API
    cart: [],       // Items added to cart, with quantity
    loading: false, // Track loading state
    error: null,    // Track error state
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = state.item.find(item => item.id === action.payload);
      if (itemToAdd) {
        const isInCart = state.cart.find(item => item.id === itemToAdd.id);
        if (isInCart) {
          isInCart.quantity += 1; 
        } else {
          state.cart.push({ ...itemToAdd, quantity: 1 });  
        }
      }
    },
    
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload); 
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;  
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;  
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state) => {
        state.loading = true;  // Set loading to true
        state.error = null;    // Reset error state
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false; // Stop loading
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.loading = false; // Stop loading
        state.error = action.error.message;  // Set error message
      });
  },
});


export const selectTotalAmount = (state) => {
  return state.data.cart.reduce((total, item) => {
    return total + item.price * item.quantity; // Sum price times quantity
  }, 0);
};


export default addItem.reducer;
export const { deleteItem, addToCart, increaseQuantity, decreaseQuantity } = addItem.actions;
