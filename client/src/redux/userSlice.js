import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        surname: ""
    },

    reducers: {
        setUserName(state, action) {
            state.name = action.payload;
        },

        setUserSurname(state, action) {
            state.surname = action.payload;
        }
    }
});

export const {
    setUserName,
    setUserSurname
} = userSlice.actions;

export default userSlice.reducer;