import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import ForgotPwd from "../Pages/ForgotPwd/ForgotPwd";
import FilesPage from "../Pages/Layout/FilesPage";
import HomePage from "../Pages/Layout/HomePage";
import Layout from "../Pages/Layout/Layout";
import WatchVideos from "../Pages/Layout/WatchVideos";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/watchvideos" element={<WatchVideos />} />
        <Route path="/filespage" element={<FilesPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
