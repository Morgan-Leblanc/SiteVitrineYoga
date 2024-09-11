import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DeGasquetMethod from "./yogaInformationContent/DeGasquetMethod";
import YogaBenefits from "./yogaInformationContent/YogaBenefits";
import YogaOverview from "./yogaInformationContent/YogaOverview";
import TeacherJourney from "./yogaInformationContent/TeacherJourney";
import "../screens/screensCss/YogaInformation.css"

const YogaInformation = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'parcours', text: 'Parcours de l\'enseignante', component: TeacherJourney },
    { id: 'deGasquet', text: 'Méthode De Gasquet', component: DeGasquetMethod },
    { id: 'yoga', text: 'Le Yoga', component: YogaOverview },
    { id: 'yogaVertus', text: 'Les vertus du Yoga', component: YogaBenefits },
  ];

  const displaySection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderContent = () => {
    const activeComponent = sections.find(section => section.id === activeSection)?.component;
    return activeComponent ? React.createElement(activeComponent) : null;
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
          {sections.map(({ id, text }) => (
            <button 
              key={id} 
              className={`buttonMoreInfos ${activeSection === id ? 'active' : ''}`}
              onClick={() => displaySection(id)}
            >
              {text}
            </button>
          ))}
        </nav>
        {renderContent()}
      </main>
    </>
  );
};

export default YogaInformation;