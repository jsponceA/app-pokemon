import React, { useEffect, useState } from "react";
import { getColorForType } from "../utils/helpers";
import { getPokemon } from "../services/pokemon";
import { useParams } from "react-router-dom";

const Pokemon = ({}) => {
  const { id } = useParams();
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
      className="container-fluid min-vh-100 mb-5"
      style={{
        backgroundColor: getColorForType(
          pokemon.types?.length > 0 ? pokemon.types[0].type.name : ""
        ),
      }}
    >
      <div className="row ">
        <div className="col-12">
          <img style={{ width: "20%" }} src="/pokemon-logo.png" alt="logo" />
        </div>
        <div className="col-md-9 col-12 ">
          <div className="card  w-100 shadow-lg border-light">
            <div className="card-body ">
              <div className="d-flex justify-content-center ">
                <img
                  style={{ width: "300px" }}
                  src={pokemon.sprites?.other.dream_world.front_default}
                  alt=""
                />
              </div>
              <div className="row">
                <div className="col-md-6 text-center">
                  <p className="my-0">{pokemon.weight}</p>
                  <p className="my-0">Weigth</p>
                </div>
                <div className="col-md-6 text-center">
                  <p className="my-0">{pokemon.height}</p>
                  <p className="my-0">Height</p>
                </div>
                <div className="col-md-12 text-center">
                  <p className="text-uppercase fw-bold fs-4">{pokemon.name}</p>
                </div>
                <hr />
                <div className="col-md-12  d-flex justify-content-center">
                  <p className="border border-2 border-secondary rounded-3 p-3 fw-bold fs-2">
                    #{pokemon.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 my-1">
              <div className="card shadow-lg border-light">
                <div className="card-body">
                  <p className="fw-bold text-center">TIPO</p>
                  <hr />
                  {pokemon.types?.map((item) => (
                    <button
                      key={item.type.name}
                      className="btn text-white me-1 mb-1"
                      style={{
                        backgroundColor: getColorForType(item.type.name),
                      }}
                    >
                      {item.type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-1">
              <div className="card shadow-lg border-light">
                <div className="card-body">
                  <p className="fw-bold text-center">HABILIDADES</p>
                  <hr />
                  {pokemon.abilities?.map((item) => (
                    <button
                      key={item.ability.name}
                      className="btn btn-outline-secondary me-1 mb-1"
                    >
                      {item.ability.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 my-1">
          <div className="card shadow-lg border-light">
            <div className="card-body">
              <p className="text-center fw-bold">MOVIMIENTOS</p>
              <hr />
              <ul className="list-unstyled">
                {pokemon.moves?.map((item) => (
                  <li key={item.move.name}>
                    {item.move.name} <hr className="my-1" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
