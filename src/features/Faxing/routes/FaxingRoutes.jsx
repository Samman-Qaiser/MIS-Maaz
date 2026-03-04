import ProtectedRoute from "@/Protectedroute";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FaxingMainPage from "../pages/FaxingMainPage";
import SettingPage from "@/features/Dashboard/pages/SettingPage";

function FaxingRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <FaxingMainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <SettingPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default FaxingRoutes;
