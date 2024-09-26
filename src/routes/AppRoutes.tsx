import { RouteObject, useRoutes } from "react-router-dom";
import {
  DashBoardPage,
  CheckoutPage,
  ProfilePage,
  ShoppingProgressPage,
  CartPage,
  MyOrdersPage,
  DetailsPage,
  ProductPage,
  UsersListPage,
  AdminDashboardPage,
  HomePage,
  NotFoundPage,
} from "../pages/index/pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardPage />,
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
        path: "/shopping-progress",
        element: <ShoppingProgressPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/orders",
        element: <MyOrdersPage />,
      },
      {
        path: "/detail",
        element: <DetailsPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/users",
        element: <UsersListPage />,
      },
      {
        path: "/adminDashboard",
        element: <AdminDashboardPage />,
      },
    ],
  },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
