import http from "http-common";
const register = (full_name, email, password, confirm_password) => {
  return http.post("/auth/register", {
    full_name,
    email,
    password,
    confirm_password,
  });
};
const login = (email, password) => {
  return http
    .post("/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;
