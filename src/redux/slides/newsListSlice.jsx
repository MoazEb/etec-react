import { createSlice } from "@reduxjs/toolkit";

const newsListSlice = createSlice({
    name: "newsList",
    initialState: {
        news: [
            {
                id: 1,
                desc: "The Future of Wearable Tech: Trends and Innovations to Watch",
                image: "https://framerusercontent.com/images/4albnHYE88QncxbZbQd4TAJZ8sY.jpg?scale-down-to=2048",
            },
            {
                id: 2,
                desc: "The Rise of Smart Home Devices: Transforming the Way We Live",
                image: "https://framerusercontent.com/images/w8U0qeGPnEraHS19zHSqO4o34.jpg?scale-down-to=2048",
            },
            {
                id: 3,
                desc: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
                image: "https://framerusercontent.com/images/0qM9Ztm4HZhZHt8vNXGofUBQf2w.jpg?scale-down-to=2048",
            },
        ],
    },
    reducers: {
    },
});

export default newsListSlice.reducer;