import { createBrowserRouter } from "react-router-dom";
import {
  AuthenticationPage,
  HomePage,
  NotFoundPage,
  DashBoardPage,
  CheckoutPage,
  ProfilePage,
  FavoritesPage,
  ShoppingProgressThirdStepPage,
  ShopPage
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
        path: "/progress",
        element: <ShoppingProgressThirdStepPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);
export default routes;
