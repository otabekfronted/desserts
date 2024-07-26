import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allDeserts: [],
    ordered: [],
    orderTotal: 0,
    totalPrice: 0,
};

export const dessertSlice = createSlice({
    name: "dessert",
    initialState,
    reducers: {
        addAllDeserts: (state, { payload }) => {
            state.allDeserts = payload;
        },

        incrementOrder: (state, { payload }) => {
            const item = state.allDeserts.find(
                (dessert) => dessert.id === payload
            );
            if (!item.amount) {
                item.amount = 1;
            } else {
                item.amount += 1;
            }
            dessertSlice.caseReducers.calculateTotal(state);
        },
        decrementOrder: (state, { payload }) => {
            const item = state.allDeserts.find(
                (dessert) => dessert.id === payload
            );
            item.amount -= 1;
            dessertSlice.caseReducers.calculateTotal(state);
        },
        clearOrder: (state) => {},
        calculateTotal: (state) => {
            state.ordered = state.allDeserts.filter(
                (dessert) => dessert.amount
            );
            let allOrdersPrice = 0;
            let allOrdersAmount = 0;
            state.ordered.forEach((order) => {
                allOrdersAmount += order.amount;
                allOrdersPrice += order.amount * order.price;
            });
            state.orderTotal = allOrdersAmount;
            state.totalPrice = allOrdersPrice;
        },
    },
});

export const { clearOrder, incrementOrder, decrementOrder, addAllDeserts } =
    dessertSlice.actions;
export default dessertSlice.reducer;
