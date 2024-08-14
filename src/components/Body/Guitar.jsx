import React from "react";
import styled from "styled-components";

const Guitar = ({ guitar }) => {
  const { id, name, image, description, price } = guitar;

  return (
    <Main className="container-xl">
     

      <Container>
        <h3>{name}</h3>
        <p>{description}</p>
        <Img src={`/img/${image}.jpg`} alt="imagen guitarra" />
        <span> Precio: {price} </span>
        <button type="button" className="btn btn-dark w-100">
          Agregar al Carrito
        </button>
      </Container>
    </Main>
  );
};

export default Guitar;
const Main = styled.main`
  background: skyblue;
`;

const Img = styled.img`
  width: 50px;
  height: auto;
`;

const Container = styled.div`
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;

    background: white;
   
`
