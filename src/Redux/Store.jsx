import { configureStore } from "@reduxjs/toolkit";
import RegestrationReducer from './AuthSlice'

export const store = configureStore({
    reducer: {
        auth : RegestrationReducer,
    }
})