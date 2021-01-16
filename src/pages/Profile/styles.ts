import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 700px;
  padding: 0 20px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 767px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    max-width: 520px;
  }

  a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 7px;
    }
  }
`;
export const PokeInfo = styled.div`
  img {
    width: 200px;
    border: 1px solid #333;
  }

  display: flex;
  margin-top: 100px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: fit-content;
    margin: 10px auto;
  }

  @media (max-width: 767px) {
    margin: auto;
  }
`;

export const RightContent = styled.div`
  margin-left: 50px;
  @media (max-width: 767px) {
    margin-left: 0px;
    margin: auto;
  }
  h2 {
    text-transform: capitalize;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    text-transform: capitalize;
  }
`;
