import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DeGasquetMethod from "./yogaInformationContent/DeGasquetMethod";
import YogaBenefits from "./yogaInformationContent/YogaBenefits";
import YogaOverview from "./yogaInformationContent/YogaOverview";
import TeacherJourney from "./yogaInformationContent/TeacherJourney";
import "../screens/screensCss/YogaInformation.css"

const YogaInformation = () => {
  const [activeSection, setActiveSection] = useState(null);

  const displaySection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'parcours':
        return <TeacherJourney />;
      case 'deGasquet':
        return <DeGasquetMethod />;
      case 'yoga':
        return <YogaOverview />;
      case 'yogaVertus':
        return <YogaBenefits />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Informations sur le Yoga - Méthode DeGasquet et plus</title>
        <meta name="description" content="Découvrez le Hatha Yoga, ses vertus, la Méthode DeGasquet et le parcours de notre enseignante. Informations complètes sur notre pratique du yoga." />
        <meta name="keywords" content="Hatha Yoga, vertus du yoga, Méthode DeGasquet, parcours enseignante, yoga information" />
      </Helmet>
      <main className="parcoursContainer">
        <nav className="containerButton">
          <button className="buttonMoreInfos" onClick={() => displaySection('yoga')}>
            Le Hatha Yoga
          </button>
          <button className="buttonMoreInfos" onClick={() => displaySection('yogaVertus')}>
            Les vertus du Yoga
          </button>
          <button className="buttonMoreInfos" onClick={() => displaySection('deGasquet')}>
            La Méthode DeGasquet
          </button>
          <button className="buttonMoreInfos" onClick={() => displaySection('parcours')}>
            Le Parcours de l'Enseignante
          </button>
        </nav>
        {renderContent()}
      </main>
    </>
  );
};

export default YogaInformation;