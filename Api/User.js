import api from "./Index.js";
//register user
export const registerUser = (user) => api.post("/users/register", user);

//login user
export const loginUser = (user) => api.post("/users/login", user);

export const addTransaction = (id, details) =>
  api.put("/users/transaction/" + id, details);

//edit routers
export const editUser = (id, user, token) => {
  api.defaults.headers.common["Authorization"] = `${token}`;

  return api.put("/users/edit/" + id, user, token);
};
export const editPassword = (id, passwords, token) => {
  api.defaults.headers.common["Authorization"] = `${token}`;
  console.log(passwords, id, token);
  return api.put("/users/edit/password/" + id, passwords, token);
};
