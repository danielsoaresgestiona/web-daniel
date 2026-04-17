import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Privacidad from "../pages/privacidad/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacidad",
    element: <Privacidad />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
