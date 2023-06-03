import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getPokemon } from "../services/pokemon";
import { getColorForType } from "../utils/helpers";

const CardPokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState({});

  const getFetchData = async () => {
    try {
      const response = await getPokemon(id);
      setPokemon(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div
      className="card shadow-lg border-white text-white py-1 h-100"
      style={{
        backgroundColor: getColorForType(
          pokemon.types?.length > 0 ? pokemon.types[0].type.name : ""
        ),
      }}
    >
      <div className="card-body position-relative">
        <p className="text-center text-uppercase fw-bold">{pokemon.name}</p>
        <div className="d-flex flex-column gap-2">
          <span className="badge rounded-pill text-bg-light text-secondary align-self-start">
            types:{" "}
            {pokemon.types?.map(
              (item, index) =>
                `${item.type.name} ${
                  index !== pokemon.types.length - 1 ? ", " : ""
                }`
            )}
          </span>
          {pokemon.stats?.map((item) => (
            <span
              key={item.stat.name}
              className="badge rounded-pill text-bg-light text-secondary align-self-start"
            >
              {`${item.stat.name}: ${item.base_stat}`}
            </span>
          ))}
        </div>
        <img
          className="animation-bg--card"
          src="/pokebal.png"
          alt="img_pokeball"
        />
        <img
          className="pokemon-img--card"
          src={pokemon.sprites?.other.dream_world.front_default}
          alt="img_pokemon"
        />
      </div>
    </div>
  );
};

CardPokemon.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CardPokemon;
