import api from "./Index.js";

export const fetchAllNPOs = async () => api.get("/npos");

export const fetchNPO = async () => api.get(`/npos/${req.params.id}`);

export const createNPO = async (formData) => api.post("/npos", formData);

export const npoLogin = async (formData) => api.post("/npos/login", formData);

export const enrollCampaign = async (ids) => api.put("/npos/enroll", ids);