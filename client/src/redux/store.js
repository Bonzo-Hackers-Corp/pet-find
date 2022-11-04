import { configureStore } from "@reduxjs/toolkit";

// Import slices
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: userReducer
    }
});