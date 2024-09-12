import React from "react";
import { Helmet } from "react-helmet";

import { dojoPicturesTab } from "../assets/pictures/dojoPicturesTab";
import "../screens/styles/Studio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Studio = () => {
  return (
    <>
      <Helmet>
        <title>Le Studio de Yoga - Yoga Arc-en-Ciel près d'Etampes</title>
        <meta name="description" content="Découvrez notre salle de yoga paisible située dans un ancien moulin au sud d'Etampes. Un espace lumineux et accueillant pour votre pratique du yoga." />
        <meta name="keywords" content="studio de yoga, salle de yoga, Etampes, Yoga Arc-en-Ciel, ancien moulin, pratique du yoga" />
      </Helmet>
      <div className="placestuffContainer">
        <section className="salleContainer">
          <h1>Le Studio</h1>
          <p>
            Le lieu de pratique est un espace privé situé à 12km au sud d'Etampes
            dans la Vallée de la Chalouette.
          </p>
          <p>
            Dans un ancien moulin, au calme et entouré de verdure, le cadre est
            privilégié<br></br> et propice à la quiétude et à l'intériorisation.
          </p>
          <p>
            La salle est lumineuse et accueillante.
          </p>
          <p>
            Pour votre confort le nombre de participants est limité à 11 par
            séance.
          </p>
        </section>

        <section className="carrousel">
          <Carousel autoPlay showArrows infiniteLoop stopOnHover width="100%">
            {dojoPicturesTab.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Salle de yoga ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </section>

        <section className="stuffContainer">
          <h2>L'équipement</h2>

          <p>
            Du matériel est à disposition sur place afin de pouvoir aménager vos
            postures <br></br>(sangles, briques en liège, zafus, galettes de genoux à
            mémoire de forme…)
          </p>
          <p>
            Pour une question d'hygiène, il est demandé d'apporter son propre
            tapis de pratique.
          </p>
          <p>
            Prévoir une tenue souple et confortable et un plaid pour la
            relaxation.
          </p>
        </section>
      </div>
    </>
  );
};

export default Studio;
