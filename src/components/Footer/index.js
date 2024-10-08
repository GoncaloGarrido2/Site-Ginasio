import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

import 'mailgo';

import { Container } from './styles';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="container-logo">
            <span className="logo">Spump</span>
          </div>
          <div className="container-menu">
            <ul className="menu">
              <div className="menu-span">Menu</div>
              <li>
                <AnchorLink href="#home">Home</AnchorLink>
              </li>

              <li>
                <AnchorLink href="#aboutUs">Sobre Nós</AnchorLink>
              </li>

              <li>
                <AnchorLink href="#prices">Preços</AnchorLink>
              </li>

              <li>
                <AnchorLink href="#contact">Contactos </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="container-address">
            <ul className="address">
              <div className="menu-span">Contactos</div>
              <li>
                <FaPhoneAlt size={20} color="#f00" />
                <a href="tel:222222222" className="space-left">
                  222 222 222
                </a>
              </li>
              <li>
                <FaWhatsapp size={20} color="#f00" />
                <a href="tel:000000000000" className="space-left">
                  999 999 999
                </a>
              </li>
              <li>
                <FaMapMarkerAlt size={20} color="#f00" />
                <a href="/" className="space-left">
                  Rua do Gym, perto da casa do Gonçalo
                </a>
              </li>
              <li>
                <MdMailOutline size={20} color="#f00" />
                <a href="mailto:gimnofirme@sapo.pt" className="space-left">
                  A038702@ipmaia.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy">
          © Copyright {year} - Todos os direitos reservados a Gonçalo Garrido
        </div>
      </div>
    </Container>
  );
}
