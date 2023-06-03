import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";
import { useSelector } from "react-redux";

const MyRoutes = () => {
  const currentUser = useSelector((state) => state.auth.user);

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
          element: currentUser ? <Pokedex /> : <Navigate to={"/"} replace />,
        },
        {
          path: "pokemon/:id",
          element: currentUser ? <Pokemon /> : <Navigate to={"/"} replace />,
        },
      ],
    },
  ]);

  return listRoutes;
};

export default MyRoutes;
