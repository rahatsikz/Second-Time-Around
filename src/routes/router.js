import { createBrowserRouter } from "react-router-dom";
import DashLayout from "../layouts/DashLayout";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import Payments from "../pages/Dashboard/Payments/Payments";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products/Products";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashLayout></DashLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payments></Payments>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/orders/${params.id}`),
      },
    ],
  },
]);
