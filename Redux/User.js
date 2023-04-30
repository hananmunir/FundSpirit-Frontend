import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { role: "", name: "", email: "", id: "", token: "", loggedIn: false },
    npo: {
      loggedIn: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state = {
        ...state,
        user: {
          ...action.payload,
          loggedIn: true,
        },
      };

      return state;
    },
    loginNPO: (state, action) => {
      state = {
        ...state,
        npo: {
          ...action.payload,
          loggedIn: true,
        },
      };
      return state;
    },
    logout: (state) => {
      state = {
        ...state,
        user: {
          role: "",
          name: "",
          email: "",
          id: "",
          token: "",
          loggedIn: false,
        },
      };

      return state;
    },
    logoutNPO: (state) => {
      state = {
        ...state,
        npo: {
          loggedIn: false,
        },
      };

      return state;
    },
  },
});

export const { login, loginNPO, logout, logoutNPO } = userSlice.actions;
export { userSlice };
