import React from "react";
import "./screensCss/CoursTarifs.css";
import { Helmet } from "react-helmet";

const ClassesAndPricing = () => {
  return (
    <>
      <Helmet>
        <title>Cours et Tarifs - Yoga Arc-en-Ciel près d'Etampes</title>
        <meta name="description" content="Découvrez nos horaires de cours de yoga et nos tarifs. Séances hebdomadaires, forfaits annuels et options flexibles pour votre pratique du yoga près d'Etampes." />
      </Helmet>
      <div className="coursTarifsContainer">
        <section className="horairesContainer">
          <h1>Horaires</h1>
          <div className="horaires">
            <article>
              <h2>Mardi</h2>
              <p>9h30 - 11h30 & 18h30 - 20h30</p>
            </article>
            <article>
              <h2>Mercredi</h2>
              <p>17h30 - 19h30</p>
            </article>
            <article>
              <h2>Jeudi</h2>
              <p>9h30 - 11h30</p>
            </article>
          </div>
          <p>Il n'y a pas de cours durant les congés scolaires.</p>
          <p>Inscription possible en cours d'année en fonction des places disponibles.</p>
        </section>
        
        <section className="tarifsContainer">
          <h1>Tarifs</h1>
          <p>La séance d'essai est offerte (appeler au préalable pour connaître les créneaux disponibles).</p>
          <p>Pour une séance hebdomadaire de 2H00 :</p>
          <p>Forfait annuel : 450 €</p>
          <p>Règlement possible en 3 chèques à l'inscription (soit 150 € par trimestre)</p>
          <p>Séance supplémentaire (dans le cadre d'un forfait annuel) : 15 €</p>
          <p>Pour une séance hors forfait : 20€</p>
          <p>Adhésion annuelle obligatoire : 20€</p>
          <p>
            Les séances non effectuées ne sont pas remboursées. 
            Néanmoins, en cas d'absence à un cours, il vous est possible de le
            rattraper sur un autre horaire et ce jusqu'à la fin de l'année en cours,
            dans la limite des places disponibles.
          </p>
        </section>
      </div>
    </>
  );
};

export default ClassesAndPricing;
