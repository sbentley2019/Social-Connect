import axios from "axios";

export const getUser = function (userId, token) {
  return axios.get(`/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const list = function () {
  return axios.get("/user/");
};

export const remove = function (userId, token) {
  return axios.delete(`/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const update = function (userId, token, user) {
  return axios.put(`/user/${userId}`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateUser = function (user, next) {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let auth = JSON.parse(localStorage.getItem("jwt"));
      auth.user = user;
      localStorage.setItem("jwt", JSON.stringify(auth));
      next();
    }
  }
};
