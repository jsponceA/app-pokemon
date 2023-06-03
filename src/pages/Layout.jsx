import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(setUser(""));
    navigate("/", { replace: true });
  };
  return (
    <div className="min-vh-100 bg-main">
      <Outlet />
      <div className="animation-bg">
        <img src="/pokebal.png" alt="pokebal" />
      </div>
      {currentUser && (
        <button
          onClick={onLogout}
          type="button"
          title="Cerrar Sesión"
          className="btn btn-logout text-white rounded-circle shadow-lg"
        >
          <i className="bx bx-log-out bx-sm my-1"></i>
        </button>
      )}
      {/* <button
        type="button"
        title="Configuraciones"
        className="btn btn-config text-white rounded-circle shadow-lg"
      >
        <i className="bx bx-cog bx-sm my-1"></i>
      </button> */}
    </div>
  );
};

export default Layout;
