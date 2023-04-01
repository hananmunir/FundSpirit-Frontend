import api from "./Index.js";

export const fetchAllCampaigns = async () => api.get("/campaigns");
