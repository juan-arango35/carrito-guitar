import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterPie className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </FooterPie>
  )
}

export default Footer;

const FooterPie= styled.footer`
    background: white;
    text-decoration: underline;
    text-align: center;
`