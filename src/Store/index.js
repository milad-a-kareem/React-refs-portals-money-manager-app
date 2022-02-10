import { configureStore } from "@reduxjs/toolkit";
import costsSlice from "./costs-slice";

const store =  configureStore({
    reducer: {costs: costsSlice}
});

export default store