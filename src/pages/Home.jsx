import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");

  const saveUser = () => {
    dispatch(setUser(username));
    navigate("/pokedex");
  };

  useEffect(() => {
    setUserName(currentUser);
  }, [currentUser]);

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="col-md-6 col-12 text-center">
          <div className="d-flex justify-content-center">
            <p className="fw-bold fs-2">Hola entrenador {currentUser}!</p>
            <img width={"120px"} src="/trainer.png" alt="tariner_img" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <p className="fs-5">Dime tu nombre para empezar</p>
            <div className="col-md-6 col-12 mx-auto">
              <div className="input-group mb-3 shadow-lg">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveUser()}
                  value={username}
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su Nombre"
                  autoFocus
                  maxLength={50}
                />
                <button
                  onClick={saveUser}
                  className="btn btn-submit-name text-white"
                  type="button"
                >
                  <i className="bx bx-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
