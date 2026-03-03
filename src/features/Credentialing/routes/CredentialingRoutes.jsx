import React from "react";
import CredentialingMainPage from "../pages/CredentialingMainPage";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/Protectedroute";
import SettingPage from "@/features/Dashboard/pages/SettingPage";

function CredentialingRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <CredentialingMainPage />
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

export default CredentialingRoutes;
