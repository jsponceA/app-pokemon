import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
function App() {
 

  return (
    <div id='App'>
    <HashRouter>
      <NavBar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pokedex' element={<Pokedex/>}/>
      </Routes>

    </HashRouter>
    </div>
  )
}

export default App
