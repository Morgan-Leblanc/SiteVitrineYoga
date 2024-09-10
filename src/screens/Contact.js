import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../screens/screensCss/Contact.css";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { Helmet } from "react-helmet";

const Contact = () => {
  const position = [48.3837585449, 2.02235507965];
  return (
    <>
      <Helmet>
        <title>Contact - Centre de Yoga près d'Etampes | Yoga Arc-en-Ciel</title>
        <meta name="description" content="Contactez notre centre de yoga près d'Etampes. Trouvez nos coordonnées, notre emplacement et les informations nécessaires pour pratiquer le yoga dans un cadre serein et accueillant." />
        <meta name="keywords" content="contact, yoga, Etampes, Yoga Arc-en-Ciel, coordonnées, emplacement" />
      </Helmet>
      <div className="contactContainer">
        <h1 id="findUs">Nous Trouver</h1>
        <div className="leaflet-container" aria-label="Carte montrant l'emplacement du centre de yoga">
          <MapContainer center={position} zoom={13} aria-label="Carte interactive du centre de yoga">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} />
          </MapContainer>
        </div>
        <div className="contactForm">
          <h2>Nous Contacter</h2>
          <address>
            <p>
              <IoMdMail id="iconForm" aria-hidden="true" />
              <a id="emailLink" href="mailto:yoga_arc-en-ciel@orange.fr" aria-label="Envoyer un email à Yoga Arc-en-Ciel">
                yoga_arc-en-ciel@orange.fr
              </a>
            </p>
            <p>
              <IoMdCall id="iconForm" aria-hidden="true" />
              <a id="phonecall" href="tel:+33685475764" aria-label="Appeler le centre de yoga" style={{ textDecoration: 'none' }}>
                06.85.47.57.64
              </a>
            </p>
          </address>
        </div>
      </div>
    </>
  );
};

export default Contact;
