import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const AppLayout = () => {
  return (
    <>
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
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
