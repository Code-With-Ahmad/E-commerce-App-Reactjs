import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AppLayout from "./components/layout/AppLayout";
import PageNotFound from "./pages/404";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useAuth } from "./context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "shop",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
