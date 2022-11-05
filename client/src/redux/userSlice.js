import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    surname: "",
    modalOpen: false,
    modalData: {
      id: 1,
      title: "Zagubiony kot!",
      author: "Jan Szuka",
      location: {
        longtitude: "52.40654798907811",
        latitude: "16.937741942432073",
      },
      post_date_time: "2020-01-01T15:10:10Z",
      pet_date_time: "2020-01-01T15:10:10Z",
      description: "Black Cat. Big.",
      phone_number: 402241998,
      tags: ["cat", "Poznań"],
      reward: {
        value: 0,
        description: "brak",
      },
    },
  },

  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },

    setUserSurname(state, action) {
      state.surname = action.payload;
    },
    setModalOpen(state, action) {
      state.modalOpen = action.payload;
    },
    setModalData(state, action) {
      state.modalData = action.payload;
    },
  },
});

export const { setUserName, setUserSurname, setModalData, setModalOpen } =
  userSlice.actions;

export default userSlice.reducer;
