import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardPokemon from "../components/CardPokemon";
import InputSearchName from "../components/InputSearchName";
import SelectSearchType from "../components/SelectSearchType";
import Loader from "../components/Loader";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPokemons,
  getPokemonsByFilters,
  getPokemon,
} from "../services/pokemon";

const Pokemons = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [perPage, setPerPage] = useState({
    limit: 9,
    offset: 0,
  });
  const [paginationData, setPaginationData] = useState({
    count: 0,
    currentPage: 0,
  });

  const [loaderPokemons, setLoaderPokemons] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const getFetchData = async () => {
    try {
      setLoaderPokemons(true);
      const response = await getPokemons(perPage);
      setPokemons(response.data.results);
      setPaginationData({ ...paginationData, count: response.data.count });
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoaderPokemons(false);
    }
  };

  const getPokemonsType = async (type) => {
    try {
      setLoaderPokemons(true);
      const response = await getPokemonsByFilters(type);
      setPokemons(response.data.pokemon.map((item) => item.pokemon));
    } catch {
      throw new Error(error);
    } finally {
      setLoaderPokemons(false);
    }
  };

  const getPokemonName = async (name) => {
    try {
      setLoaderPokemons(true);
      const response = await getPokemon(name);
      if (response.data.name) {
        navigate(`/pokemon/${response.data.name}`);
      }
    } catch (error) {
      window.alert(`El pokemon ${name} no existe`);
      throw new Error(error);
    } finally {
      setLoaderPokemons(false);
    }
  };

  const handlePageChange = (e) => {
    const { selected } = e;
    setPerPage((prev) => ({
      ...prev,
      offset: prev.limit * selected,
    }));
    setPaginationData({ ...paginationData, currentPage: selected });
  };

  useEffect(() => {
    getFetchData();
  }, [perPage]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <p className="fs-1 fw-bold">Pokedex</p>
          <p>
            Bienvenido {currentUser} , aquí puedes encontrar tu pokemon favorito
          </p>
        </div>
        <div className="col-md-12 d-flex justify-content-center mb-3">
          <div className="form-check form-switch d-flex  align-items-center">
            <input
              onChange={(e) => setToggleSwitch(e.target.checked)}
              className="form-check-input fs-3 switch-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label mt-auto fw-bold"
              htmlFor="flexSwitchCheckDefault"
            >
              FILTRO POR {toggleSwitch ? "NOMBRE" : "TIPO"}
            </label>
          </div>
        </div>

        <div className="col-md-4 mx-auto">
          {toggleSwitch ? (
            <InputSearchName sendValue={getPokemonName} />
          ) : (
            <SelectSearchType sendValue={getPokemonsType} />
          )}
        </div>
      </div>
      {loaderPokemons && (
        <div className="row mt-5 d-flex justify-content-center">
          <Loader />
        </div>
      )}
      {!loaderPokemons && (
        <div className="row mt-5">
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="col-md-4 my-2">
              <Link
                to={`/pokemon/${pokemon.name}`}
                className="text-decoration-none"
              >
                <CardPokemon id={pokemon.name} />
              </Link>
            </div>
          ))}
          <div className="col-md-12">
            <ReactPaginate
              previousLabel="<<"
              nextLabel=">>"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={
                paginationData.count
                  ? Math.ceil(paginationData.count / perPage.limit)
                  : 1
              }
              onPageChange={handlePageChange}
              containerClassName="pagination pagination-sm justify-content-center"
              activeClassName="active"
              forcePage={paginationData.currentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemons;
