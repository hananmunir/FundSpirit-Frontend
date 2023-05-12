import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      role: "",
      name: "",
      email: "",
      id: "",
      token: "",
      loggedIn: false,
      walletAddress: "",
    },
    npo: {
      loggedIn: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state = {
        ...state,
        user: {
          walletAddress: state.user.walletAddress,
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
          ...state.user,
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
    addWallet: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          walletAddress: action.payload,
        },
      };

      return state;
    },

    removeWallet: (state) => {
      state = {
        ...state,
        user: {
          ...state.user,
          walletAddress: "",
        },
      };
      return state;
    },
  },
});

export const { login, loginNPO, logout, logoutNPO, addWallet, removeWallet } =
  userSlice.actions;
export { userSlice };
