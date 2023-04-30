import { createSlice, configureStore } from "@reduxjs/toolkit";

const npoSlice = createSlice({
  name: "npos",
  initialState: [],
  reducers: {
    fetchAllNPOs: (state, action) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { fetchAllNPOs } = npoSlice.actions;
export { npoSlice };
const store = configureStore({
  reducer: npoSlice.reducer,
});

export default store;

// Can still subscribe to the store
//store.subscribe(() => console.log("Subscribed", store.getState()));
