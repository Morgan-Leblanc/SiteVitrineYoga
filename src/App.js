import React from "react";
//Css
import "./App.css";
//Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Screens
import Acceuil from "./screens/Acceuil";
import Contact from "./screens/Contact";
import CoursTarifs from "./screens/CoursTarifs";
import LaSalle from "./screens/LaSalle";
import Parcours from "./screens/Parcours";
//Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Acceuil/>} />
          <Route path="/cours_tarifs" element={<CoursTarifs/>} />
          <Route path="/lasalle" element={<LaSalle/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/parcours" element={<Parcours/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
