import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PokeCard from '../../components/PokeCard'

import { Container, PokeInfo, LeftContent, RightContent, PokesRelacionados } from "./styles";

interface ParamTypes {
  id: string;
}

interface Poke {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}

const Profile: React.FC = () => {
  const [poke, setPoke] = useState<Poke>({} as Poke);
  const [pokesRelacionados, setPokesRelacionados] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pokeFront, setPokeFront] = useState(true);
  let { id } = useParams<ParamTypes>();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPoke(data);
      setLoading(false);
      console.log(data);

      const idRelacionado1 = Number(id) === 1 ? '2' : Number(id) - 1;
      const idRelacionado2 = Number(id) === 1 ? '3' : Number(id) + 1;
      const { data:dataRelacionado1 } = await api.get(`/pokemon/${idRelacionado1}`);
      const { data:dataRelacionado2 } = await api.get(`/pokemon/${idRelacionado2}`);
      setPokesRelacionados([dataRelacionado1,dataRelacionado2]);
    }
    fetchData();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Container>
      <Link to="/">
        <FaArrowLeft /> Voltar à página inicial
      </Link>
      <PokeInfo>
        <LeftContent>
          <img
            src={
              pokeFront ? poke.sprites.front_default : poke.sprites.back_default
            }
          />
          <button onClick={() => setPokeFront(!pokeFront)}>Girar 180º</button>
        </LeftContent>
        <RightContent>
          <h2>{poke.name}</h2>
          <ul>
            {poke.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </RightContent>
      </PokeInfo>
      {/* <PokesRelacionados>
          <h3>Conheça a Pokedex</h3>
          <div>
            {pokesRelacionados.map(poke => (
              <PokeCard {...poke} />
            ))}
          </div>
      </PokesRelacionados> */}
    </Container>
  );
};

export default Profile;
