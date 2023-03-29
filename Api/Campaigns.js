import api from "./Index.js";

export const fetchAllCampaigns = async (req, res) => api.get("/campaigns");
