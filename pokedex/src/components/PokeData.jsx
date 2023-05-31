import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PokeData = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => setData(resp.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
     <h1>{data.name}</h1>
     <img src={data.sprites?.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default PokeData;
