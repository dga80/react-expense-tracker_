const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name: 'expensesSlice',
    initialState: {
        expenseList: [{name: 'Apple', price: 1.00},{name: 'Laptop', price: 100.00}]
    },
    reducers: {
        addExpenseAction: (currentSlice) => {
            console.log("addExpenseAction");
            currentSlice.expenseList.push({name:"Cherry", price: "3.00"});
        },
    }
});
//dentro de los brackets ponemos todas las acciones que queramos exportar
export const { addExpenseAction } = expenseSlice.actions;