import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: "",
    name: "",
    email: "",
    id: "",
    token: "",
  },
  reducers: {
    login: (state, action) => {
      console.log("We are at store.js", action);
      state = {
        ...action.payload,
      };
      console.log("State here is", state);
      return state;
    },
    logout: (state) => {
      state = {
        role: "",
        name: "",
        email: "",
        id: "",
        token: "",
      };
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;

// Can still subscribe to the store
store.subscribe(() => console.log("Subscribed", store.getState()));
