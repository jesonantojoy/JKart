import { configureStore } from "@reduxjs/toolkit";
import addItem from "../reducer/addItem";


const store = configureStore({
    reducer:{
 data:addItem
}});
 
export default store;
