import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "../api/getList";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getList();
  return response;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
