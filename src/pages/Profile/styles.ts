import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 700px;
  font-family: 'Roboto', sans-serif;

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
    
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;

    button {
        width: fit-content;
        margin: 10px auto;
    }
`;

export const RightContent = styled.div`
margin-left: 50px;
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
