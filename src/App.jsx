import { useEffect, useState } from "react";
import Guitar from "./components/Body/Guitar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { db } from "../src/components/data/db";
import styled from "styled-components";

function App() {
  const [inforGuitar, setInfoGuitar] = useState([]);

  useEffect(() => {
    setInfoGuitar(db);
  }, []);

  return (
    <>
      <Header />
      <h2 className="text-center">Nuestra Colección</h2>
      <ContainerPricipal >
        {inforGuitar.map((guitar) => (
          <Guitar 
          guitar={guitar}
          />
        ))}
      </ContainerPricipal>
      <Footer />
    </>
  );
}

export default App;

const ContainerPricipal= styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  background: black;
`
