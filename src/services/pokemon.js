import { axiosInstace } from "../plugins/axios";

const getPokemons = async (params) => {
  try {
    const response = await axiosInstace.get(`/pokemon/`, { params });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemonsByFilters = async (type) => {
  try {
    const response = await axiosInstace.get(`/type/${type}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemon = async (id) => {
  try {
    const response = await axiosInstace.get(`/pokemon/${id}/`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const getTypes = async () => {
  try {
    const response = await axiosInstace.get(`/type/`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export { getPokemons, getPokemonsByFilters, getPokemon, getTypes };
