import React from "react";
import { Route, Routes } from "react-router-dom";
import MedicalBillingMainPage from "../pages/MedicalBillingMainPage";
import SettingPage from "@/features/Dashboard/pages/SettingPage";
import ProtectedRoute from "@/Protectedroute";

function MedicalBillingRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <MedicalBillingMainPage />
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

export default MedicalBillingRoutes;
