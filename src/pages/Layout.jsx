import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="min-vh-100 bg-main">
      <Outlet />
      <div className="animation-bg">
        <img src="/pokebal.png" alt="pokebal" />
      </div>
      <button
        type="button"
        title="Cerrar Sesión"
        className="btn btn-logout text-white rounded-circle shadow-lg"
      >
        <i className="bx bx-log-out bx-sm my-1"></i>
      </button>
      <button
        type="button"
        title="Configuraciones"
        className="btn btn-config text-white rounded-circle shadow-lg"
      >
        <i className="bx bx-cog bx-sm my-1"></i>
      </button>
    </div>
  );
};

export default Layout;
