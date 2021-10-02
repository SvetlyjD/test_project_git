import { configureStore } from "@reduxjs/toolkit";
import ReducerGood from "./taskSlice";
export default configureStore({
    reducer: {
        good: ReducerGood
    }
})