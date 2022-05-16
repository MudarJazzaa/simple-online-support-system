import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import adminRoutes from "adminRoutes";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import userRoutes from "userRoutes";
import AdminLayout from "components/AdminLayout";
import UserLayout from "components/UserLayout";
import PrivateRoute from "components/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={route.component}
          key={route.key}
        />
      );
    }

    return null;
  });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route element={<PrivateRoute />} />
          <Route path="/admin" element={<AdminLayout />}>
            {getRoutes(adminRoutes)}
          </Route>
          <Route path="/user" element={<UserLayout />}>
            {getRoutes(userRoutes)}
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
