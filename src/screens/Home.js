import React from "react";
import yogiste from "../assets/pictures/yogiste_header.jpg";
import "./styles/Home.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Yoga Arc-en-Ciel | Centre de Yoga près d'Etampes - Accueil</title>
        <meta name="description" content="Bienvenue au centre Yoga Arc-en-Ciel près d'Etampes. Découvrez notre approche holistique du yoga dans un cadre serein et apaisant. Cours pour tous niveaux." />
        <link rel="canonical" href="https://www.yoga-arc-en-ciel.fr/" />
        <meta name="keywords" content="yoga, Etampes, Yoga Arc-en-Ciel, bien-être, méditation, relaxation" />
      </Helmet>
      <main className="acceuilContainer">
        <img src={yogiste} id="imgYogiste" alt="Pratiquant de yoga en posture de méditation" />
        <section className="citationAcceuil">
          <h1>
            <q cite="https://www.goodreads.com/author/quotes/38285.C_G_Jung">On ne peut aller au delà de soi-même. On ne peut que progresser à l'intérieur de soi.</q>
          </h1>
          <p style={{ fontSize: 40, fontWeight: "bold" }}>Carl Gustav Jung</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
