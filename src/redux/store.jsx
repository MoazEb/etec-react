import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./slides/productlistSlice";
import newsListReducer from "./slides/newsListSlice";
import FAQReducer from "./slides/FAQSlice";
export const store = configureStore({
    reducer: {
        productList: productListReducer,
        newsList: newsListReducer,
        FAQ: FAQReducer,
    },
});