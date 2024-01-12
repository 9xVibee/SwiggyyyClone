/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Search from "./pages/Search";
import Help from "./pages/Help";
import Offer from "./pages/Offer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Cart />,
  },
  {
    path: "/offer",
    element: <Offer />,
  },
]);

export default appRouter;
