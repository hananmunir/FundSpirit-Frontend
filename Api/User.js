import api from "./Index.js";
//register user
export const registerUser = (user) => {
  return api.post("/users/register", user);
};

//login user
export const loginUser = (user) => {
  return api.post("/users/login", user);
};
