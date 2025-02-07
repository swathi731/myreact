import { configureStore, createSlice } from "@reduxjs/toolkit";
import Login from "./Login";

//create Products slice(to group the specific functionality of related state and reducers(actions))
const productsSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Potato", price: 34 },
      { name: "Tomato", price: 15 },
      { name: "Green Chilli", price: 30 },
      { name: "Carrot", price: 50 },
      { name: "Onion", price: 60 },
    ],
    nonveg: [
      { name: "Chicken", price: 240 },
      { name: "Fish", price: 450 },
      { name: "Mutton", price: 890 },
      { name: "Prawns", price: 500 },
      { name: "Skin Less Chicken", price: 220 },
    ],
    milk: [
      { name: "Jersey", price: 32 },
      { name: "Heritage", price: 31 },
      { name: "Sagam", price: 34 },
    ],
  },
  reducers: {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament: (state, action) => {
      let item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      let item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((item) => item.name !== action.payload.name);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    clearCart: () => [],
  },
});

let purchaseDetails = createSlice({
  name: "purchase",
  initialState: [],
  reducers: {
    purchaseList: (state, action) => {
      state.push({ ...action.payload });
    },
  },
});

const authslice=createSlice({
  name:"auth",
  initialState:{
    isAuthenticated: localStorage.getItem("username")?true:false,
    user:localStorage.getItem("username")
  },
  reducers:{
    login:(state,action)=>
    {
      state.isAuthenticated=true;
      state.user=action.payload;
      localStorage.setItem("username",action.payload);
    },
    logout:(state)=>{
      state.isAuthenticated=false;
      state.user=" ";
      localStorage.removeItem("username");
    }
  }
});
//configure store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchase: purchaseDetails.reducer,
    auth:authslice.reducer
  },
});

//export the cart reducers as actions addToCart

export const { addToCart, increament, decrement, removeFromCart, clearCart } =
  cartSlice.actions;

export const { purchaseList } = purchaseDetails.actions;
export const {login,logout}=authslice.actions;
//export store
export default store;