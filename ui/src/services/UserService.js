import http from "http-common";
import authHeader from "./auth-header";

const getUserBoard = () => {
  return http.get("user", { headers: authHeader() });
};
const getAdminBoard = () => {
  return http.get("admin", { headers: authHeader() });
};
const UserService = {
  getUserBoard,
  getAdminBoard,
};
export default UserService;
