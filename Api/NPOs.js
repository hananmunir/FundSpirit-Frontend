import api from "./Index.js";

export const fetchAllNPOs = async () => api.get("/npos");

export const fetchNPO = async () => api.get(`/npos/${req.params.id}`);

export const createNPO = async (formData) => api.post("/npos", formData);
