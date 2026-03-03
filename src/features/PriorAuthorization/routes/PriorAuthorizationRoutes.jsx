import ProtectedRoute from "@/Protectedroute";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PriorAuthorizationMainPage from "../pages/PriorAuthorizationMainPage";
import SettingPage from "@/features/Dashboard/pages/SettingPage";

function PriorAuthorizationRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <PriorAuthorizationMainPage />
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

export default PriorAuthorizationRoutes;
