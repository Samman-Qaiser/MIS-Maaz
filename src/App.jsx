import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import { Loader2Icon } from "lucide-react";

// Loading fallback component
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center gap-3">
      <Loader2Icon className="animate-spin text-primary" size={48} />
      <p className="text-lg font-medium text-slate-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;