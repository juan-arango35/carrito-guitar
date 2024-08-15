import React from "react";
import styled from "styled-components";
import { useState, useMemo } from "react";

const Header = ({ cart ,removeToCart, inclementtar,decremetar, vaciarCarrito}) => {
  const [show, setShow] = useState(false);

  function mostar() {
    setShow(!show);
  }


  const precioTotal = useMemo(()=> cart.reduce( (total, item )=>total + (item.cantidad * item.price), 0), [cart])
  return (
    <HeaderFront>
      <ContainerPrincipal>
        <Content>
          <ContentImg>
            <a href="index.html">
              <Logo src="../../../img/header.jpg" alt="imagen logo" />
            </a>
            <div>
              <LogoCarrito
                className="img-fluid"
                src="./public/img/carrito.png"
                onClick={mostar}
              />
              {show ? "" : ""}
            </div>
          </ContentImg>

          <ContentGuitar>
            
            {cart.length === 0 ? (
              <Texto className="text-center">Agrega un guitarra al carrito</Texto>
            ) : (
              <>
                {show && (
                  <InfoCompra key={cart.id}>
                    {cart.map((guitar) => (
                      <Producto>
                        <ContentItem key={guitar.id}>
                          <H2>imagen</H2>
                          <img
                            style={{ width: "30px",marginLeft:"15px" }}
                            className="img-fluid"
                            src={`/img/${guitar.image}.jpg`}
                            alt="imagen guitarra"
                          />
                        </ContentItem>
                        <ContentText>
                          <H2>Nombre de la guitarra</H2>
                          <p>{guitar.name}</p>
                        </ContentText>
                        <ContentText>
                          <H2>Precio</H2>
                          <p>{guitar.price}</p>
                        </ContentText>
                        <ContentText>
                          <H2>cantidad</H2>
                          <Button type="button" className="btn btn-dark"
                          onClick={()=>decremetar(guitar.id)}
                          >
                            -
                          </Button>
                          {guitar.cantidad}
                          <Button type="button" className="btn btn-dark"
                          onClick={()=>inclementtar(guitar.id)}  
                          >
                            +
                          </Button>
                          <Buttonx className="btn btn-danger" type="button"
                          onClick={()=>removeToCart(guitar.id)}
                          >
                            X
                          </Buttonx>
                        </ContentText>
                      </Producto>
                    ))}

                        <p>
                          Total a Pagar <span>{precioTotal}</span>{" "}
                        </p>
                    <button 
                    onClick={vaciarCarrito}
                    >Vaciar Carrito</button>
                  </InfoCompra>
                )}
              </>
            )}
          </ContentGuitar>
        </Content>
      </ContainerPrincipal>
    </HeaderFront>
  );
};

export default Header;


const Button = styled.button`
  border: none;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background: black;
  color: white;
  font-weight:bold;
`

const Buttonx=styled.button`
  border: none;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background:red;
  color: white;
  font-weight: bold;
`

const ContentItem= styled.div`
padding: auto;
  
`
const H2=styled.h2`
  font-size: 18px;
`
const ContentText=styled.div`
 
  margin-top: -28px;
  text-align: center;
`
const HeaderFront = styled.header`
  background: white;
  padding: 0;
  margin: -20px;
  position: relative;
`;
const Logo = styled.img`
  width: 120px;
  height: 80px;
  opacity: 0.8;
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
  margin-top: 20px;
`;
const ContentImg=styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  align-items:center;
  background: #b33939;
  height: 150px;
`
const ContainerPrincipal = styled.div`
  padding: 0 60px;
  background: white;
`;
const LogoCarrito = styled.img`
  width: 80px;
  height: auto;
  margin-top: 20px;
  cursor: pointer;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoCompra = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const Producto = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #bfdbe7;
`;

const Texto=styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  width: 300px;
  top: -50px;
  left: 40px;
`
const ContentGuitar=styled.div`
  position: absolute;
  top: 150px;
  left: 60%;
  width: 475px;
`