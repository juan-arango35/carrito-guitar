import React from "react";
import styled from "styled-components";
import { useState, useMemo } from "react";

const Header = ({ cart }) => {
  const [show, setShow] = useState(false);

  function mostar() {
    setShow(!show);
  }


  const precioTotal = useMemo(()=> cart.reduce( (total, item )=>total + (item.cantidad * item.price), 0), [cart])
  return (
    <HeaderFront>
      <ContainerPrincipal>
        <Content>
          <div className="col-8 col-md-3">
            <a href="index.html">
              <Logo src="../../../public/img/header.jpg" alt="imagen logo" />
            </a>
          </div>

          <div className="carrito">
            <div>
              <LogoCarrito
                className="img-fluid"
                src="./public/img/carrito.png"
                onClick={mostar}
              />
              {show ? "Ocultar Componente" : "Mostrar Componente"}
            </div>

            {cart.length === 0 ? (
              <p className="text-center">El carrito esta vacio</p>
            ) : (
              <div>
                {show && (
                  <InfoCompra>
                    {cart.map((guitar) => (
                      <Producto>
                        <div key={guitar.id}>
                          <h2>imagen</h2>
                          <img
                            style={{ width: "20px" }}
                            className="img-fluid"
                            src={`/img/${guitar.image}.jpg`}
                            alt="imagen guitarra"
                          />
                        </div>
                        <div>
                          <h2>Nombre de la guitarra</h2>
                          <p>{guitar.name}</p>
                        </div>
                        <div>
                          <h2>Precio</h2>
                          <p>{guitar.price}</p>
                        </div>
                        <div>
                          <h2>cantidad</h2>
                          <button type="button" className="btn btn-dark">
                            -
                          </button>
                          {guitar.cantidad}
                          <button type="button" className="btn btn-dark">
                            +
                          </button>
                          <button className="btn btn-danger" type="button">
                            X
                          </button>
                        </div>
                      </Producto>
                    ))}

                        <p>
                          Total a Pagar <span>{precioTotal}</span>{" "}
                        </p>
                    <button>Vaciar Carrito</button>
                  </InfoCompra>
                )}
              </div>
            )}
          </div>
        </Content>
      </ContainerPrincipal>
    </HeaderFront>
  );
};

export default Header;

const HeaderFront = styled.header`
  background: #e76868;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
`;

const ContainerPrincipal = styled.div`
  padding: 20px 60px;
  background: red;
`;

const LogoCarrito = styled.img`
  width: 80px;
  height: auto;
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
`;
