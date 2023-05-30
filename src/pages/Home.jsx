import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    navigate("/pokedex");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-style">
          <label htmlFor="text">Ingresa tu nombre</label>
          <input type="text" id="text" />
          <button type="submit"> Ingresar </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
