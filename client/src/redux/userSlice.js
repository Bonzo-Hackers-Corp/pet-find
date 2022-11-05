import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    surname: "",
    isModalOpen: false,
    modalId: 1,
  },

  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },

    setUserSurname(state, action) {
      state.surname = action.payload;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = true;
    },
    setModalId(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  setUserName,
  setUserSurname,
  openModal,
  closeModal,
  setModalId,
} = userSlice.actions;

export default userSlice.reducer;
