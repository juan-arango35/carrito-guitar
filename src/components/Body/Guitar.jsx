import React from "react";
import styled from "styled-components";

const Guitar = ({ guitar, addToCart}) => {
  const { id, name, image, description, price } = guitar;


  return (
    <Main>
      <Container>
        <TitleNombre>{name}</TitleNombre>
        <Description>{description}</Description>
        <Img src={`/img/${image}.jpg`} alt="imagen guitarra" />
        <Precio> Precio: {price} </Precio>
        <Button 
        type="button"
        onClick={()=>addToCart(guitar)}
        >
          Agrega al Carrito
        </Button>
      </Container>
    </Main>
  );
};

export default Guitar;



const Button= styled.button`
  border: none;
  height: 25px;
  width: 150px;
  background: #ef3f3f;
  margin: 0 auto;
  border-radius: 10px;
  color: white;
  font-weight: bold;
`
const Precio= styled.span`
  font-weight: bold;
  text-align: end;
  margin-right: 10px;
  margin-bottom: 5px;
`
const Description= styled.p`
  text-align: center;
  font-weight: 530;
  margin-top: 0;
  height: 50px;
`
const TitleNombre= styled.h3`
  text-align: center;
`

const Main = styled.div`
  background: white;
  padding-left: 15px;
`;

const Img = styled.img`
  width: 50px;
  height: auto;
  margin: 10px auto
`;

const Container = styled.div`
    height: 310px;
    width: 280px;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    background: #f0e6e6;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px gray;
`
