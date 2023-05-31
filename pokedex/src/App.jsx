import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokeData from "./components/PokeData";

function App() {
  return (
    <div id="App">
      <HashRouter>
        <nav className="nav">
          <Link to="/"> Home </Link>
          <Link to="/pokedex"> Pokedex </Link>
          <Link to= "/pokedex/id"/>
        </nav>
        <Routes>
          <Route
          path="/"
          element={<Home/>}
          />
          <Route
          path="/pokedex"
          element={<Pokedex/>}
          />
          <Route
          path="/pokedex/:id"
          element={<PokeData/>}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
