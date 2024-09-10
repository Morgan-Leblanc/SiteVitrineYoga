import React from "react";
import { Helmet } from "react-helmet";
import "../screensCss/YogaMethodsAndBenefits.css"

const YogaOverview = () => {
  return (
    <>
      <Helmet>
        <title>Le Hatha-Yoga - Méthode DE GASQUET®</title>
        <meta name="description" content="Découvrez notre approche du Hatha-Yoga, adaptée aux occidentaux et revisitée par la Méthode DE GASQUET®. Une pratique douce, progressive et respectueuse du corps." />
        <meta name="keywords" content="Hatha-Yoga, Méthode DE GASQUET, APOR, yoga occidental, pratique douce, postures adaptées" />
      </Helmet>
      <article className="multipleDesignContainer">
        <h1 title="le hatha-yoga">Le Hatha-Yoga</h1>
        <section>
          <p>
            Bien qu'issu de la tradition du Hatha Yoga, le yoga enseigné au sein de
            notre association est adapté aux occidentaux que nous sommes et revisité
            par la Méthode DE GASQUET®
          </p>
          <p>
            Nous proposons une pratique globale, douce, progressive et respectueuse
            du corps et du rythme de chacun.
          </p>
          <p>
            La méthode APOR (voir méthode De Gasquet) propose une approche
            personnalisée de la pratique.
          </p>
          <p>
            Les postures sont proposées par degré d'exigence et l'aide d'accessoires
            (sangles, briques en liège, coussins, galettes de genoux à mémoire de
            forme…) va permettre d'aménager la pratique de chacun et de composer avec
            les diverses morphologies, pathologies, fragilités et niveaux de
            souplesse.{" "}
          </p>
          <p>
            A la fin de chaque séance un temps de relaxation au sol ou de
            méditation est proposé.
          </p>{" "}
        </section>
      </article>
    </>
  );
};

export default YogaOverview;
