import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importações
import Layout from "./components/layout/Layout";
import LocarLanding from "./components/LocarLanding";
import GrupoPage from "./pages/GrupoPage";
import ComunicadosPage from "./pages/ComunicadosPage";
import ServicosPage from "./pages/ServicosPage";
import MeioAmbientePage from "./pages/MeioAmbientePage";
import PessoasCulturaPage from "./pages/PessoasCulturaPage";
import ContatoPage from "./pages/ContatoPage";
import FiliaisPage from "./pages/FiliaisPage";
import SistemasPage from "./pages/SistemasPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* A rota "pai" TEM que ser o Layout */}
        <Route path="/" element={<Layout />}>
          
          {/* As rotas "filhas" vêm AQUI DENTRO */}
          <Route index element={<LocarLanding />} />
          <Route path="grupo" element={<GrupoPage />} /> 
          <Route path="comunicados" element={<ComunicadosPage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="meio-ambiente" element={<MeioAmbientePage />} />
          <Route path="pessoas-cultura" element={<PessoasCulturaPage />} />
          <Route path="contato" element={<ContatoPage />} />
          <Route path="filiais" element={<FiliaisPage />} />
          <Route path="sistemas" element={<SistemasPage />} />  

        </Route> {/* Fim da rota "pai" */}
      </Routes>
    </Router>
  );
}

export default App;