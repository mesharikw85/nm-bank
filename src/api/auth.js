import instance from "./index";
import jwt_decode from "jwt-decode";

const registerNew = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const Key in userInfo) formData.append(Key, userInfo[Key]);
    const { res } = await instance.post("/auth/v3/register", formData);
    storeToken(res.access);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  try {
    const { res } = await instance.post("/auth/v3/login", userInfo);
    storeToken(res.access);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getAllUsers = async () => {
  try {
    const { res } = await instance.get("/auth/v3/profile");
    return res;
  } catch (error) {
    console.log(error);
  }
};
const storeToken = (access) => {
  localStorage.setItem("access", access);
};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);

    const currentTime = Date.now() / 10000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logOut = () => {
  localStorage.removeItem("access");
};

const userProfile = async () => {
  try {
    const { res } = await instance.post("/auth/v3/profile");
    storeToken(res.access);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  registerNew,
  login,
  getAllUsers,
  logOut,
  storeToken,
  checkToken,
  userProfile,
};
