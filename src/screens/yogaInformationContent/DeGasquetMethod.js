
import React from "react";
import { Helmet } from "react-helmet";
import deGasquet from "../../assets/pictures/gasquet.jpg"
import "../screensCss/YogaMethodsAndBenefits.css"

const DeGasquetMethod = () => {
  return (
    <div className="multipleDesignContainer">
      <Helmet>
        <title>La méthode DeGasquet - Yoga Arc-en-Ciel</title>
        <meta name="description" content="Découvrez la méthode DeGasquet, une approche unique alliant prévention et renforcement musculaire, enseignée par le Dr Bernadette de Gasquet." />
        <meta name="keywords" content="DeGasquet, yoga, méthode, prévention, renforcement musculaire, Dr Bernadette de Gasquet" />
      </Helmet>
      <h1 title="La méthode DeGasquet">La méthode DeGasquet</h1>
      <p>
        Le Dr Bernadette de Gasquet, médecin et professeur de yoga, associe dans
        son travail l’approche corporelle, les savoirs traditionnels et les
        dernières données scientifiques et médicales avec une méthode alliant
        prévention et renforcement musculaire.
      </p>
      <p>
        La méthode APOR (approche posturo-respiratoire) du Dr De Gasquet,
        appliquée au yoga, a la particularité de s’appuyer sur la précision
        biomécanique des postures.
      </p>
      <p>
        Elle intègre un étirement juste et respectueux de la colonne
        vertébrale, libérant le diaphragme et permettant une respiration
        correcte et physiologique.
      </p>
      <p>
        L’originalité de son approche est la synchronisation de la mise en
        tension du périnée avec l’expiration, induisant une diminution de la
        pression intra-abdominale et contribuant ainsi à protéger le rachis,
        les abdominaux, le plancher pelvien et les organes suspendus. <br></br>Le
        placement du bassin se fait toujours à partir du périnée.
      </p>
      <p>
        Le temps d’effort se fait toujours sur une expiration de bas en haut
        et dans un auto-grandissement, ce qui va renforcer l’effort en
        libérant le diaphragme et sans poussée délétère vers le bas.
      </p>
      <p>
        Avec des formations en France et dans le monde, elle fait école auprès
        des professionnels de la santé, du sport et du yoga, et est l’auteure de
        plusieurs livres à succès, dont « Yoga sans dégâts », « Périnée, arrêtons
        le massacre », « Abdominaux, arrêtez le massacre »…
      </p>
      <img id="degasquet" src={deGasquet} alt="Certification de yoga DeGasquet" />
    </div>
  );
};

export default DeGasquetMethod;
