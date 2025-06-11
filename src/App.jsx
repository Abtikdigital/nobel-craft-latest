import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Project from "../src/Pages/Project";
import Services from "./Pages/Services";
import ConstructionService from "./Pages/Construction";
import BuildingService from "./Pages/BuildingHardware";
import ElectricalGoodsService from "./Pages/ElectricalGoods";
import SteelFabricationService from "./Pages/SteelFabrication";
import SteelFurnitureService from "./Pages/SteelFurniture";
import BuildingHardware from "./Pages/BuildingHardware";
import ElectricalGoods from "./Pages/ElectricalGoods";
import SteelFurniture from "./Pages/SteelFurniture";
import SteelFabrication from "./Pages/SteelFabrication";


function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/construction" element={<ConstructionService />} />
        <Route path="/services/building-hardware" element={<BuildingHardware />} />
        <Route path="/services/electrical-goods" element={<ElectricalGoods />} />
        <Route path="/services/steel-furniture" element={<SteelFurniture />} />
        <Route path="/services/steel-fabrication" element={<SteelFabrication />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
