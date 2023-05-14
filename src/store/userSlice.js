import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valueCom1: "Hello world",
    valueCom2: "Clicks on Button",
    valueCom3: []
};

export const userSlice = createSlice({
    name: "userStore",
    initialState: initialState,
    reducers: {
        // component2
        login: (state) => {
            state.valueCom2 = "Login Successful";
        },
        logout: (state) => {
            state.valueCom2 = "Logout Successful";
        },
        // component3
        addArr: (state, action) => {
            state.valueCom3 = action.payload
        }
    }
})

export default userSlice.reducer;
export const { login, logout, addArr } = userSlice.actions;