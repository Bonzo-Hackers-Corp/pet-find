import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "../api/getList";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getList();
  console.log(response);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, actions) => {});
  },
});

export default postsSlice.reducer;
