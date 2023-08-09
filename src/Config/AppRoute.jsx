import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ForgotPwd from "../Pages/ForgotPwd/ForgotPwd";
import HomePage from "../Pages/Layout/HomePage";
import WatchVideos from "../Pages/Layout/WatchVideos";
import FilesPage from "../Pages/Layout/FilesPage";
import Layout from "../Pages/Layout/Layout";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";

const AppRoute = () => {
  const Group = { title: "Group" };
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/watchvideos" element={<WatchVideos />} />
        <Route path="/filespage" element={<FilesPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
