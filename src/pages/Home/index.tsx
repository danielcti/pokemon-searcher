import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaArrowUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import PokeCard from "../../components/PokeCard";

import { Container, InputContainer, DestaquesContainer } from "./styles";

const Home: React.FC = () => {
  const [pokeList, setPokeList] = useState<any[]>([]);
  const [pokeListVisible, setPokeListVisible] = useState<any[]>([]);
  const [pokeDestaqueList, setPokeDestaqueList] = useState<any[]>([]);
  const [listVisible, setListVisible] = useState(true);
  const [input, setInput] = useState("");
  const history = useHistory();

  function handlePokeClick(url: string) {
    const id = url.split("pokemon")[1].replaceAll("/", "");
    history.push(`/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("/pokemon?limit=50");
      setPokeList(data.results);
      setPokeListVisible(data.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function getRandomPokes() {
      const destaques = [];
      for (let i = 0; i < 4; i++) {
        const rand = String(Math.floor(Math.random() * 99 + 1));
        const { data } = await api.get(`/pokemon/${rand}`);
        destaques.push(data);
      }
      setPokeDestaqueList(destaques);
    }
    getRandomPokes();
  }, []);

  function handleButtonClick() {
    setListVisible(!listVisible);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const filteredArray = pokeList.filter((element) =>
      element.name.includes(e.target.value.toLowerCase())
    );
    setPokeListVisible(filteredArray);
    if (e.target.value !== "") {
      setListVisible(true);
    }
  }

  return (
    <Container>
      <h2>Bem vindo a busca dos melhores pokemons da galáxia</h2>
      <DestaquesContainer>
        <h3>Pokemons em destaque</h3>
        <div>
          {pokeDestaqueList.length > 0 &&
            pokeDestaqueList.map((poke) => <PokeCard {...poke} />)}
        </div>
      </DestaquesContainer>
      <InputContainer style={{ position: "relative" }}>
        <input
          placeholder="Digite o nome do pokemon"
          onChange={handleInputChange}
          value={input}
          data-testid="input"
        />
        <button
          onClick={handleButtonClick}
          className={listVisible ? "seta visible" : "seta not_visable"}
          name='setVisibility'
          role='button'
        >
          <FaArrowUp />
        </button>
      </InputContainer>
      {listVisible && (
        <ul data-testid="pokemon-list">
          {pokeListVisible.length > 0 &&
            pokeListVisible.map((poke) => (
              <li key={poke.url} onClick={() => handlePokeClick(poke.url)}>
                {poke.name}
              </li>
            ))}
        </ul>
      )}
    </Container>
  );
};

export default Home;
