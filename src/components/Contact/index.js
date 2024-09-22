import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Player from '../Modal';

import play from '../../assets/play.json';

import { Container } from './styles';

export default function Contact() {
  const [send, setSend] = useState('Enviar');
  const [open, setOpen] = useState(false);

  function sendEmail() {
    setTimeout(() => {
      setSend('Enviado');
    }, 1000);
    return setSend('Enviando...');
  }

  function handleVideo() {
    setOpen(!open);
  }

  return (
    <Container>
      
      <div className="gallery-container">
        <h1 className="text-galery">Ótima localização</h1>

        <button className="button" type="button" onClick={() => setOpen(true)}>
          <Lottie
            width="40%"
            options={{
              animationData: play,
              loop: true,
            }}
          />
        </button>
        {open ? <Player onCloseModal={handleVideo} /> : null}
      </div>

      <div className="map-contact-detalis">
        <div className="open-time">
          <h5>Horários: </h5>
          <ul>
            <li>
              Durante a semana: <span>10h - 22h</span>
            </li>
            <li>
              Sábado: <span>10h - 14h</span>
            </li>
            <li>
              Domingo: <span>Fechado</span>
            </li>
          </ul>
        </div>
        <div id="contact">
      </div>
        <div className="map-contact-form">
          <h5>Contate-nos</h5>

          <form
            action="https://postmail.invotes.com/send"
            method="post"
            id="email_form"
            onSubmit={sendEmail}
          >
            <input type="text" name="extra_nome" required placeholder="Nome" />
            <input type="email" name="reply_to" required placeholder="Email" />
            <input type="text" name="subject" required placeholder="Assunto" />
            <textarea name="text" placeholder="Messagem" />
            <input
              type="hidden"
              name="access_token"
              value="hs6h7m2187t2uicqpdd7bxdp"
            />

            <input
              type="hidden"
              name="success_url"
              value=".?message=Email+Successfully+Sent%21&isError=0"
            />
            <input
              type="hidden"
              name="error_url"
              value=".?message=Email+could+not+be+sent.&isError=1"
            />
            <button type="submit">{send}</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
