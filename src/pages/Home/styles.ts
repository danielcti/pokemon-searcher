import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
  font-family: 'Roboto', sans-serif;

  h2 {
    text-align: center;
  }

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

  ul {
    list-style: none;
    padding: 0;
    overflow-y: scroll;
    max-height: 400px;

    /* ::-webkit-scrollbar { */
      /* width: 0px; */
      /* background: transparent; */
    /* } */

  }

  li {
    padding: 5px 0;
    border-bottom: 1px solid;
    text-transform: capitalize;
    cursor: pointer;
  }
`;
