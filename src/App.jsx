import { useEffect, useState } from "react";
import Guitar from "./components/Body/Guitar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { db } from "../src/components/data/db";
import styled from "styled-components";

function App() {
  const [inforGuitar, setInfoGuitar] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExist >= 0) {
      const updateCart = [...cart];
      updateCart[itemExist].cantidad++;
      setCart(updateCart);
    } else {
      item.cantidad = 1;
      setCart([...cart, item]);
    }
  }


  function removeToCart(id){
   setCart((prev)=>prev.filter(guitar=>guitar.id !== id))
  }


  useEffect(() => {
    setInfoGuitar(db);
  }, []);

  return (
    <>
      <Header cart={cart} 
      removeToCart={removeToCart}
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
