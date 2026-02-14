import React from "react";
import MainScreen from "../pages/MainScreen";

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../../Protectedroute";
import Header from "../../NavigationMenu/components/Header";

const DashboardRoutes = () => {
  return (
    <Routes>
 
      {/* Protected route */}
      <Route
        path="/mainScreen"
        element={
          <ProtectedRoute>
            <MainScreen />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default DashboardRoutes;
