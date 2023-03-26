import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//register user
export const registerUser = (user) => {
  return api.post("/users/register", user);
};

//login user
export const loginUser = (user) => {
  return api.post("/users/login", user);
};
