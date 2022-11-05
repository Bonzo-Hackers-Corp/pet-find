import { configureStore } from "@reduxjs/toolkit";

// Import slices
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer
    }
});