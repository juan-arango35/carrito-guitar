import { useEffect, useState } from "react";
import Guitar from "./components/Body/Guitar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { db } from "../src/components/data/db";
import styled from "styled-components";

function App() {
  
  function cartInicial(){
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ?  JSON.parse(localStorageCart) : []
  }
  
  const [inforGuitar, setInfoGuitar] = useState([]);
  const [cart, setCart] = useState(cartInicial);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExist >= 0) {
      if (cart[itemExist].cantidad >= 5) return;
      const updateCart = [...cart];
      updateCart[itemExist].cantidad++;
      setCart(updateCart);
    } else {
      item.cantidad = 1;
      setCart([...cart, item]);
    }
  }

  function removeToCart(id) {
    setCart((prev) => prev.filter((guitar) => guitar.id !== id));
  }

  function inclementtar(id) {
    const actualizandoCart = cart.map((item) => {
      if (item.id === id && item.cantidad < 5) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
        };
      }
      return item;
    });
    setCart(actualizandoCart);
  }

  function decremetar(id) {
    const disminuido = cart.map((item) => {
      if (item.id === id && item.cantidad > 1) {
        return {
          ...item,
          cantidad: item.cantidad - 1,
        };
      }
      return item;
    });
    setCart(disminuido);
  }

  function vaciarCarrito(e) {
    setCart([]);
  }

  useEffect(() => {
    setInfoGuitar(db);
  }, []);

  return (
    <>
      <Header
        cart={cart}
        removeToCart={removeToCart}
        inclementtar={inclementtar}
        decremetar={decremetar}
        vaciarCarrito={vaciarCarrito}
      />
      <h2 className="text-center">Nuestra Colección</h2>
      <ContainerPricipal>
        {inforGuitar.map((guitar) => (
          <Guitar
            key={guitar.id}
            guitar={guitar}
            setCart={setCart}
            addToCart={addToCart}
          />
        ))}
      </ContainerPricipal>
      <Footer />
    </>
  );
}

export default App;

const ContainerPricipal = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  background: black;
`;
