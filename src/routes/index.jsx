import { useRoutes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

const MyRoutes = () => {
  let listRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "pokedex",
          element: <Pokedex />,
        },
      ],
    },
  ]);

  return listRoutes;
};

export default MyRoutes;
