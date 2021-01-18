import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
  font-family: "Roboto", sans-serif;
  padding: 0 20px;

  @media (max-width: 767px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    max-width: 520px;
  }

  h2 {
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    overflow-y: scroll;
    max-height: 400px;
  }

  li {
    padding: 5px 5px;
    border-bottom: 1px solid;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      background: #ddd;
      font-weight: bold;
    }
  }
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;

    :focus {
      outline: none;
    }
  }

  button.not_visable {
    transform: translateY(-50%) rotate(180deg);
  }
`;

export const DestaquesContainer = styled.div`
  > div {
    display: flex;
  }

  h3 {
    text-align: center;
  }

  @media (max-width: 767px) {
    > div {
      overflow-x: scroll;
    }
  }
`;

export const OrderButtonsDiv = styled.div`
  display: flex;
  margin: 15px auto;
  width: fit-content;

  button {
    margin: 0 10px;
  }
`;
