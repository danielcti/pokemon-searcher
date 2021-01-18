import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

interface ChildComponentProps {
  name: string;
  sprites: {
    front_default: string;
  };
  id: number;
}

const PokeCard: React.FC<ChildComponentProps> = (props) => {
  return (
    <Link to={`/${props.id}`}>
      <Container>
        <h3>{props.name}</h3>
        <img src={props.sprites.front_default} alt="poke_avatar" />
      </Container>
    </Link>
  );
};

export default PokeCard;
