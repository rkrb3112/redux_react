import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {value: {username: ""}};
const userSLice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) =>{
            state.value = action.payload;
        },

        logout: (state) =>{
            state.value = initialState.value;
        },
    },
});

export const {login, logout} = userSLice.actions;

export const store = configureStore({
    reducer: {
        user: userSLice.reducer,
    }
});