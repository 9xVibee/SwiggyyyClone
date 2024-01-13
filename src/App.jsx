import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Help from "./pages/Help";
import Offer from "./pages/Offer";
import SearchPage from "./pages/Search";

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
        element: <SearchPage />,
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