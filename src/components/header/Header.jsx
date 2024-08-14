import React from "react";
import styled from "styled-components";

const Header = () => {
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
            
            <LogoCarrito
              className="img-fluid"
              src="./public/img/carrito.png"
              alt="imagen carrito"
            />

            <InfoCompra>
              <p className="text-center">El carrito esta vacio</p>
              <Producto>


              <div>
              <h2>imagen</h2>
                <img
                  style={{ width: "50px" }}
                  className="img-fluid"
                  src="./public/img/guitarra_02.jpg"
                  alt="imagen guitarra"
                />
              </div>
              <div>
                <h2>Nombre</h2>
                <p>SRV</p>
              </div>
              <div>
                <h2>Precio</h2>
                <p>$299</p>
              </div>
              <div>
                <h2>cantidad</h2>
                <button type="button" className="btn btn-dark">
                  -
                </button>
                1
                <button type="button" className="btn btn-dark">
                  +
                </button>
                <button className="btn btn-danger" type="button">
                  X
                </button>
              </div>
              </Producto>

              <button>Vaciar Carrito</button>
            </InfoCompra>
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
`
