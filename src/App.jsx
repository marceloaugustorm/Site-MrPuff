import React from "react";
import { Route, Routes } from "react-router-dom"; // Não precisa importar Router aqui
import Header from "./components/Header";
import Footer from "./components/Footer";
import Conheca from "./components/conheca"; // Página "Nos Conheça"
import Jumb from "./components/Jumb";
import Section from "./components/Section"; // Seção comum a todas as páginas
import Horario from "./components/informacoes"

import "./index.css";

function App() {
  return (
    <div className="site-container">
      {/* O Header será renderizado em todas as páginas */}
      <Header />

      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <>
              <Jumb /> {/* Renderiza o Jumb apenas na home */}
              <Section /> {/* Renderiza o Section na home */}
            </>
          }
        />

        {/* Página "Nos Conheça" */}
        <Route path="/informacoes" element={<Horario/>} />
        <Route path="/conheca" element={<Conheca />} />
        
      </Routes>

      
      

      {/* O Footer será renderizado em todas as páginas */}
      <Footer />
    </div>
  );
}

export default App;
