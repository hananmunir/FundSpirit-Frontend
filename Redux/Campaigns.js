import { createSlice, configureStore } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: [],
  reducers: {
    fetchAllCampaigns: (state, action) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { fetchAllCampaigns } = campaignSlice.actions;
export { campaignSlice };
const store = configureStore({
  reducer: campaignSlice.reducer,
});

export default store;

// Can still subscribe to the store
//store.subscribe(() => console.log("Subscribed", store.getState()));
