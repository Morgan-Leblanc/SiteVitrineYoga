import React from "react";
import { Helmet } from "react-helmet";
import structuredData from "./structuredData";
//Css
import "./App.css";
//Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Screens
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import ClassesAndPricing from "./screens/ClassesAndPricing";
import Studio from "./screens/Studio";
import YogaInformation from "./screens/YogaInformation";
//Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Yoga Sud Etampes Association Arc-En-Ciel</title>
        <meta name="description" content="Découvrez notre studio de yoga, nos cours et tarifs, ainsi que des informations sur le yoga et la méthode DeGasquet." />
        <meta name="keywords" content="yoga, cours de yoga, tarifs yoga, studio yoga, méthode DeGasquet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.yoga-arcenciel-etampes.fr/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/classes-and-pricing" element={<ClassesAndPricing/>} />
          <Route path="/studio" element={<Studio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/yoga-information" element={<YogaInformation/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
