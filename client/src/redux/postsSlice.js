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
    mapPosition: {lat: 52.43205668262439, lng: 17.072698615344446}
  },

  reducers: {
    setMapPosition(state, action) {
      state.mapPosition = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { setMapPosition } = postsSlice.actions;

export default postsSlice.reducer;
