import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
    name: "productList",
    initialState: {
        products: [
            {
                id: 1,
                name: "Headphones x-28m",
                price: 149.99,
                category: 'Headphones',
                image: "https://framerusercontent.com/images/kUOQ8u8fRfnwNx6SFLSesC5Von0.png",
            },
            {
                id: 2,
                name: "eWatch SF 4",
                category: 'Watches',
                price: 349.99,
                image: "https://framerusercontent.com/images/93R1mlfMfzDub1dmWfaygjX44g.png",
            },
            {
                id: 3,
                name: "eDisplay XR",
                category: 'Displays',
                price: 649.99,
                image: "https://framerusercontent.com/images/iihhlY75uwJhVitKr3AWmJPXJ2c.png",
            },
            {
                id: 4,
                name: "Headphones or-27n",
                price: 149.99,
                category: 'Headphones',
                image: "https://framerusercontent.com/images/IpzYEgz7vvIpJtcvfnvenMF4xU.png?scale-down-to=1024",
            },
            {
                id: 5,
                name: "Headphones w-96c",
                price: 149.99,
                category: 'Headphones',
                image: "https://framerusercontent.com/images/ne0FWinQ6NkBPHhzjaSjNrV588w.png?scale-down-to=1024",
            },
            {
                id: 6,
                name: "Headphones z-23c",
                price: 149.99,
                category: 'Headphones',
                image: "https://framerusercontent.com/images/NlsNOc6hfa4yIjuwEBGEwC4AcQ.png?scale-down-to=1024",
            },
            {
                id: 7,
                name: "Headphones w-99",
                price: 149.99,
                category: 'Headphones',
                image: "https://framerusercontent.com/images/mGaIx8aWaphfJOjuCzDrTFWmBqw.png?scale-down-to=1024",
            },
            {
                id: 8,
                name: "Headphones e-11g",
                price: 149.99,
                category: 'Headphones',
                image: "https://framerusercontent.com/images/QYWruMm0YW5LVwhtdoqQmUnt8.png?scale-down-to=1024",
            },
            {
                id: 9,
                name: "eDisplay XG",
                category: 'Displays',
                price: 649.99,
                image: "https://framerusercontent.com/images/w7IbfPMQ1WzfzPX81a0tLqv0U4.png?scale-down-to=1024",
            },
            {
                id: 10,
                name: "eDisplay XE",
                category: 'Displays',
                price: 649.99,
                image: "https://framerusercontent.com/images/piHBuDHdbNsSYXKIxhDUsL450t4.png?scale-down-to=1024",
            },
            {
                id: 11,
                name: "eDisplay XS",
                category: 'Displays',
                price: 649.99,
                image: "https://framerusercontent.com/images/dvVP8jcTluoF7RabaNzgZvPX0Mc.png?scale-down-to=1024",
            },
            {
                id: 12,
                name: "eWatch SF 3 Black",
                category: 'Watches',
                price: 349.99,
                image: "https://framerusercontent.com/images/iFgviiMk2LxRYkzYddfdadmxw.png",
            },
            {
                id: 13,
                name: "eWatch SF 3 White",
                category: 'Watches',
                price: 349.99,
                image: "https://framerusercontent.com/images/cBliI9vz9JrHAuQ5sWMLRLL7btY.png",
            },
            {
                id: 14,
                name: "iPhone 15 Black",
                category: 'Phones',
                price: 799.99,
                image: "https://framerusercontent.com/images/ocXJCwP105H5BIyExA1zlBssJxI.png?scale-down-to=1024",
            },
            {
                id: 15,
                name: "iPhone 15 Red",
                category: 'Phones',
                price: 799.99,
                image: "https://framerusercontent.com/images/5ikfzmtLoja1Li2JNmnv3dw0SM.png?scale-down-to=1024",
            },
            {
                id: 16,
                name: "iPhone 15 White",
                category: 'Phones',
                price: 799.99,
                image: "https://framerusercontent.com/images/MFin8e8aG5MqZ4Eh5ODtU2TA.png?scale-down-to=1024",
            },
        ],
    },
    reducers: {
    },
});

export default productListSlice.reducer;