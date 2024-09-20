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
  CartPage,
  MyOrdersPage,
  DetailsPage,
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
        element: <ShoppingProgressThirdStepPage />
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/my-orders",
        element: <MyOrdersPage />,
      },
      {
        path: "/details",
        element: <DetailsPage />,
      },
      {
        path: "/progress",
        element: <ShoppingProgressThirdStepPage />,
      },
    ],
  },
]);
export default routes;
