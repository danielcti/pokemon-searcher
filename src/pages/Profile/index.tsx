import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { Container, PokeInfo, LeftContent, RightContent } from "./styles";

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
  const [loading, setLoading] = useState(true);
  const [pokeFront, setPokeFront] = useState(true);
  let { id } = useParams<ParamTypes>();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPoke(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

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
            alt="sprite_pokemon"
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
    </Container>
  );
};

export default Profile;
