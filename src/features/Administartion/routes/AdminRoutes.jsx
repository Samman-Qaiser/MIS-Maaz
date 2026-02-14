import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../../Protectedroute";
import AdminMainPage from "../pages/AdminMainPage";
import SettingPage from "../../Dashboard/pages/SettingPage";

const AdminRoutes = () => {
  return (
 <Routes>
    <Route path=""   element={
          <ProtectedRoute>
            <AdminMainPage />
          </ProtectedRoute>
    }/>
      <Route path="settings"   element={
          <ProtectedRoute>
            <SettingPage />
          </ProtectedRoute>
    }/>
 </Routes>
  )
}

export default AdminRoutes