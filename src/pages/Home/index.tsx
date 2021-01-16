import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaArrowDown } from "react-icons/fa";
import { useHistory } from 'react-router-dom'

import { Container } from "./styles";

const Home: React.FC = () => {
  const [pokeList, setPokeList] = useState<any[]>([]);
  const [pokeListVisible, setPokeListVisible] = useState<any[]>([]);
  const [listVisible, setListVisible] = useState(false);
  const [input, setInput] = useState("");
  const history = useHistory();

function handlePokeClick(url:string){
    const id = url.split("pokemon")[1].replaceAll("/","");
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

  function handleButtonClick() {
    setListVisible(!listVisible);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const filteredArray = pokeList.filter((element) =>
      element.name.includes(e.target.value.toLowerCase())
    );
    setPokeListVisible(filteredArray);
  }

  return (
    <Container>
      <h2>Bem vindo a busca dos melhores pokemons da galáxia</h2>
      <div style={{position: 'relative'}}>
      <input
        placeholder="Digite o nome do pokemon"
        onChange={handleInputChange}
        value={input}
      />
      <button onClick={handleButtonClick}>
        <FaArrowDown />
      </button>
      </div>
      {listVisible && (
        <ul>
          {pokeListVisible.length > 0 &&
            pokeListVisible.map((poke) => 
            <li key={poke.url} onClick={() => handlePokeClick(poke.url)}>{poke.name}</li>
            )}
        </ul>
      )}
    </Container>
  );
};

export default Home;
