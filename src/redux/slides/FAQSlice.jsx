import { createSlice } from "@reduxjs/toolkit";

const FAQSlice = createSlice({
    name: "FAQ",
    initialState: {
        faq: [
            {
                id: 1,
                title: "How do I track my order?",
                description: "You can track your order by logging into your account and viewing the order status. Alternatively, you can use the tracking number provided in your shipping confirmation email."
            },
            {
                id: 2,
                title: "What payment methods do you accept?",
                description: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience."
            },
            {
                id: 3,
                title: "Do you offer international shipping?",
                description: "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination. Please check our shipping policy for more details."
            },
            {
                id: 4,
                title: "How can I contact customer support?",
                description: "You can reach our customer support team via email at support@example.com, through our live chat feature on the website, or by calling our toll-free number during business hours."
            },
            {
                id: 5,
                title: "What is your warranty policy?",
                description: "Our products come with a standard 1-year warranty against manufacturing defects. Some products may have extended warranty options. Please refer to the specific product page for detailed warranty information."
            },
        ]
    },
    reducers: {}
})

export default FAQSlice.reducer;