/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importações
import Layout from "./components/layout/Layout";
import LocarLanding from "./components/LocarLanding";
const GrupoPage = lazy(() => import("./pages/GrupoPage"));
const ComunicadosPage = lazy(() => import("./pages/ComunicadosPage"));
const ServicosPage = lazy(() => import("./pages/ServicosPage"));
const MeioAmbientePage = lazy(() => import("./pages/MeioAmbientePage"));
const PessoasCulturaPage = lazy(() => import("./pages/PessoasCulturaPage"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const FiliaisPage = lazy(() => import("./pages/FiliaisPage"));
const SistemasPage = lazy(() => import("./pages/SistemasPage"));
const OuvidoriaPage = lazy(() => import("./pages/OuvidoriaPage"));
const DenunciaPage = lazy(() => import("./pages/DenunciaPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const PoliticaPrivacidadePage = lazy(() => import("./pages/PoliticaPrivacidadePage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div role="status" className="p-8">Carregando...</div>}><Routes>
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
          <Route path="ouvidoria" element={<OuvidoriaPage />} />
          <Route path="denuncia" element={<DenunciaPage />} />
          <Route path="politica-privacidade" element={<PoliticaPrivacidadePage />} />

        </Route> {/* Fim da rota "pai" */}

           
        {/* 2. Rota 404 (Catch-all) - Fora do Layout */}
        {/* O asterisco (*) captura qualquer URL que não combinou com as rotas acima */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes></Suspense>
    </Router>
  );
}

export default App;