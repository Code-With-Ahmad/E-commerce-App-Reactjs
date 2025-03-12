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
import ProductDetail from "./pages/Detail";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import { useAuth } from "./context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("PrivateRoute - Current user:", user);

  // If user is undefined/null and we're still loading, show a loading state
  if (user === null && localStorage.getItem("authSession")) {
    console.log("PrivateRoute - Waiting for auth state to resolve");
    return <div>Loading...</div>; // Temporary loading state
  }

  return user ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Navigate to="/login" replace /> },
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
      {
        path: "product/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "favourite",
        element: (
          <PrivateRoute>
            <Favourite />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Register /> },
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
