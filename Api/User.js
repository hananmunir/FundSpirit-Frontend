import api from "./Index.js";
//register user
export const registerUser = (user) => api.post("/users/register", user);

//login user
export const loginUser = (user) => api.post("/users/login", user);

export const addTransaction = (id, details) =>
  api.put("/users/transaction/" + id, details);
