import api from "./Index.js";

export const fetchAllCampaigns = async () => api.get("/campaigns");

export const fetchCampaign = async (id) => api.get(`/campaigns/${id}`);

export const addFundingAmount = async (id, amount) =>
  api.put(`/campaigns/fund/${id}`, { amount });
