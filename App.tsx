import React, { useState } from "react"; // Adicionado 'React' aqui
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { News } from "./components/News";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { CatalogPage } from "./components/CatalogPage";
import MetaPixel from "./components/MetaPixel";


export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "catalog">("home");

  if (currentPage === "catalog") {
    // A linha 17 provavelmente estava aqui, onde o JSX de CatalogPage é retornado.
    return <CatalogPage onBack={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <MetaPixel />
      
      <Header onNavigateToCatalog={() => setCurrentPage("catalog")} />
      <Hero onNavigateToCatalog={() => setCurrentPage("catalog")} />
      <About />
      <News />
      <Location />
      <Footer />
    </div>
  );
}