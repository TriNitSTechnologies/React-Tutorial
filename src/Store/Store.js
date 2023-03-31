import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User.slice";

const Store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default Store;