import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterPie>
        <div>
            <p>GuitarLA - Todos los derechos Reservados</p>
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