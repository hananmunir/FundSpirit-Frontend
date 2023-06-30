import api from "./Index.js";

export const fetchAllNPOs = async () => await api.get("/npos");

export const fetchNPO = async (id) => await api.get(`/npos/${id}`);

export const createNPO = async (formData) => api.post("/npos", formData);

export const npoLogin = async (formData) => api.post("/npos/login", formData);


export const enrollCampaign = async (ids, token) => {
  api.defaults.headers.common["Authorization"] = `${token}`;
  return api.put("/npos/enroll", ids);
};
