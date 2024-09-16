import { createBrowserRouter } from "react-router-dom";
import {
  AuthenticationPage,
  HomePage,
  NotFoundPage,
  DashBoardPage,
  CheckoutPage,
  ProfilePage,
  FavoritesPage,
  CartPage,
} from "../pages/index/pages";

/*
All routes are nested within the HomePage component.
Add your routes at the end of the children array !!!!!!!  
*/

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <DashBoardPage />,
      },
      {
        path: "/dashboard",
        element: <DashBoardPage />,
      },
      {
        path: "/login",
        element: <AuthenticationPage />,
      },
      {
        path: "/register",
        element: <AuthenticationPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default routes;
