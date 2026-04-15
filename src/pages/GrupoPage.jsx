/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
// src/pages/GrupoPage.jsx

import React, { useState } from "react";
import { Users, Truck, Rocket, Eye, Leaf, ChevronDown } from "lucide-react";
import MapaBrasil from "../components/MapaBrasil.jsx";

const groupCompanies = [
  {
    name: "Locar Gestão de Resíduos",
    description: "Responsável pelos resíduos sólidos urbanos.",
    logo: "/images/locar.png",
    color: "#038242", // Verde da Locar
  },
  {
    name: "GTR Ambiental",
    description: "Responsável pelos resíduos industriais.",
    logo: "/images/logo-gtr.png",
    color: "#038242", // Verde da GTR
  },
  {
    name: "I9 Paulista",
    description:
      "Concessão dos resíduos sólidos da cidade do Paulista/PE por 25 anos.",
    logo: "/images/logo-i9.png",
    color: "#182d70", // Azul da I9
  },
  {
    name: "I9 Jequié",
    sector: "Resíduos Municipal",
    logo: "/images/i9-jequie.png",
    color: "#182d70",
    description:
      "A I9 Jequié é a empresa responsável pela concessão dos resíduos sólidos da cidade de Jequié/BA, oferecendo soluções eficientes e sustentáveis para a gestão dos resíduos municipais.",
  },
];

const STATE_DATA = [
  {
    sigla: "PE",
    nome: "Pernambuco",
    cor: "#034422",
    text: "white",
    cities: [
      "Jaboatão dos Guararapes",
      "Cabo de Santo Agostinho",
      "Caruaru",
      "Garanhuns",
      "Vitória de Santo Antão",
      "Pesqueira",
      "Olinda",
      "Paulista",
    ],
  },
  {
    sigla: "SP",
    nome: "São Paulo",
    cor: "#034422",
    text: "white",
    cities: ["São Paulo Capital (Consórcio LOCAT)"],
  },
  {
    sigla: "BA",
    nome: "Bahia",
    cor: "#034422",
    text: "white",
    cities: ["Jequié"],
  },
  {
    sigla: "RS",
    nome: "Rio Grande do Sul",
    cor: "#034422",
    text: "white",
    cities: ["Canela", "Novo Hamburgo"],
  },
  {
    sigla: "RJ",
    nome: "Rio de Janeiro",
    cor: "#034422",
    text: "white",
    cities: ["Rio de Janeiro"],
  },
  {
    sigla: "BO",
    nome: "Bolívia",
    cor: "#c3cd86",
    text: "#034422",
    cities: ["Santa Cruz de la Sierra"],
  },
];

function StateList() {
  const [openSigla, setOpenSigla] = useState(null);

  const toggle = (sigla) =>
    setOpenSigla((prev) => (prev === sigla ? null : sigla));

  return (
    <div className="w-full md:w-2/5 space-y-2">
      {STATE_DATA.map(({ sigla, nome, cor, text, cities }) => {
        const isOpen = openSigla === sigla;
        const hasCities = cities && cities.length > 0;
        return (
          <div
            key={sigla}
            className="rounded-xl overflow-hidden shadow-sm border border-gray-100"
          >
            <button
              onClick={() => hasCities && toggle(sigla)}
              className="w-full flex items-center gap-4 bg-white px-5 py-3 transition-colors"
              style={{ cursor: hasCities ? "pointer" : "default" }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0"
                style={{ background: cor, color: text }}
              >
                {sigla}
              </div>
              <span className="flex-1 text-left text-gray-700 font-medium text-base">
                {nome}
              </span>
              {hasCities && (
                <ChevronDown
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#038242",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              )}
            </button>

            {/* Cidades expansíveis */}
            {hasCities && (
              <div
                style={{
                  maxHeight: isOpen ? cities.length * 36 + 16 + "px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                  background: "#f0f4f0",
                }}
              >
                <ul className="px-5 py-2 space-y-1">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-sm text-gray-600 py-1"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#038242" }}
                      />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const GrupoPage = () => {
  return (
    // Adicionamos um padding-top para a página não ficar "atrás" do Navbar
    // e um fundo cinza claro para diferenciar da homepage
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Layout de 2 colunas: 3/5 para o texto, 2/5 para as logos */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          {/* Coluna 1: Texto e Stats */}
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span style={{ color: "#038242" }}>História</span>
            </h1>

            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                O Grupo Locar surgiu nos anos 90. Especializado em limpeza
                urbana e gestão de resíduos sólidos urbanos e industriais,
                destacou-se em Pernambuco como pioneira neste segmento.
              </p>
              <p>
                Hoje, o Grupo Locar atua em diversos municípios de Pernambuco,
                Rio de Janeiro, Mato Grosso e São Paulo e tornou-se referência
                nacional no setor.
              </p>
            </div>

            {/* Seção de Stats (números) */}
            <div className="mt-10 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Estrutura
              </h2>

              {/* Card colaboradores */}
              <div
                className="mb-4 rounded-xl overflow-hidden shadow-md"
                style={{ background: "#034422" }}
              >
                <div className="flex items-center gap-4 px-6 pt-5 pb-3">
                  <Users
                    className="w-8 h-8 flex-shrink-0"
                    style={{ color: "#c3cd86" }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-white font-semibold text-base">
                        Colaboradores
                      </span>
                      <span
                        className="font-black text-2xl"
                        style={{ color: "#c3cd86" }}
                      >
                        4.000+
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full h-2"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "82%", background: "#c3cd86" }}
                      />
                    </div>
                  </div>
                </div>
                <p
                  className="text-xs px-6 pb-4"
                  style={{ color: "rgba(195,205,134,0.7)" }}
                >
                  Equipes técnicas e operacionais distribuídas em todo o Brasil
                </p>
              </div>

              {/* Card frota */}
              <div
                className="rounded-xl overflow-hidden shadow-md"
                style={{ background: "#c3cd86" }}
              >
                <div className="flex items-center gap-4 px-6 pt-5 pb-3">
                  <Truck
                    className="w-8 h-8 flex-shrink-0"
                    style={{ color: "#034422" }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <span
                        className="font-semibold text-base"
                        style={{ color: "#034422" }}
                      >
                        Caminhões na Frota
                      </span>
                      <span
                        className="font-black text-2xl"
                        style={{ color: "#034422" }}
                      >
                        400+
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full h-2"
                      style={{ background: "rgba(3,68,34,0.2)" }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{ width: "68%", background: "#034422" }}
                      />
                    </div>
                  </div>
                </div>
                <p
                  className="text-xs px-6 pb-4"
                  style={{ color: "rgba(3,68,34,0.65)" }}
                >
                  Frota moderna adaptada para diversas frentes de serviço
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mt-6">
                Com uma equipe técnica robusta e uma frota moderna, o Grupo
                Locar, em cada município que atua, leva a estrutura compatível
                com o porte do serviço necessário. Além de recrutar mão-de-obra
                da própria região, mantém um gerenciamento individualizado para
                cada cidade e supervisão operacional.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nosso <span style={{ color: "#c3cd86" }}>Compromisso</span>
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                A GTR Ambiental nasceu do desejo de fazer gestão e transporte de
                resíduos industriais de uma forma diferenciada, onde a qualidade
                na prestação do serviço anda sempre em sintonia com o cliente e
                a busca da sustentabilidade está presente em todos os processos.
              </p>
              <p>
                São mais de 35 anos de uma política de desenvolvimento
                sustentável, respeitando o meio ambiente e as futuras gerações,
                oferecendo serviços para todas as áreas de manutenção ambiental,
                desde a limpeza e conservação das cidades e indústrias à
                destinação correta do lixo, contribuindo para minimizar os
                impactos sofridos ao meio ambiente.
              </p>
            </div>
          </div>

          {/* Coluna 2: Empresas (Logos) */}
          <div className="md:col-span-2">
            <div className="sticky top-28">
              {" "}
              {/* Faz as logos "seguirem" o scroll */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empresas do Grupo
              </h2>
              <div className="space-y-6">
                {groupCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-start bg-white p-5 rounded-xl shadow-lg border-l-4"
                    style={{ borderLeftColor: company.color }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 object-contain flex-shrink-0 mr-5"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {company.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Nossa Presença em Números ── */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nossa Presença em{" "}
              <span style={{ color: "#038242" }}>Números</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px_1fr] grid-rows-2 gap-y-6 md:gap-y-10 items-center">
            {/* ── Top Left — verde escuro ── */}
            <div className="flex items-center justify-center md:justify-end md:pr-10">
              <div className="relative w-full max-w-xs">
                <div
                  className="relative rounded-2xl p-5 md:p-7 text-white shadow-xl overflow-hidden"
                  style={{ background: "#034422" }}
                >
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
                    style={{ background: "#c3cd86" }}
                  />
                  <p className="relative text-4xl md:text-5xl font-black mb-2">
                    +4.000
                  </p>
                  <p className="relative text-lg font-bold mb-1">
                    Colaboradores
                  </p>
                  <p className="relative text-sm text-green-200/80 leading-snug">
                    Equipes técnicas e operacionais em constante capacitação
                  </p>
                </div>
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-[1.5px]"
                  style={{
                    right: "-80px",
                    height: "3px",
                    width: "80px",
                    background: "#034422",
                  }}
                />
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-1/2"
                  style={{
                    right: "-91px",
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "11px solid #034422",
                  }}
                />
              </div>
            </div>

            {/* ── Centro — rowSpan 2 ── */}
            <div className="order-first md:order-none md:row-span-2 flex items-center justify-center py-4 md:py-0">
              <div
                className="relative flex items-center justify-center"
                style={{ width: 300, height: 300 }}
              >
                {/* Anel externo decorativo girando levemente */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 310,
                    height: 310,
                    border: "2px dashed rgba(14,131,68,0.25)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                {/* Buraco — anel sólido verde escuro, centro transparente */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 280,
                    height: 280,
                    border: "52px solid #034422",
                    background: "transparent",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow:
                      "0 20px 60px rgba(3,68,34,0.6), inset 0 6px 24px rgba(0,0,0,0.45)",
                  }}
                />
                {/* Imagem saindo do buraco — ligeiramente maior que o anel interno */}
                <img
                  src="/images/planta_locar.png"
                  alt="Locar"
                  className="relative z-10 object-contain drop-shadow-2xl"
                  style={{
                    width: 356,
                    height: 356,
                    top: -60,
                    alignItems: "center",
                  }}
                />
              </div>
            </div>

            {/* ── Top Right — verde claro ── */}
            <div className="flex items-center justify-center md:justify-start md:pl-10">
              <div className="relative w-full max-w-xs">
                <div
                  className="relative rounded-2xl p-5 md:p-7 shadow-xl overflow-hidden"
                  style={{ background: "#c3cd86" }}
                >
                  <div
                    className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-30"
                    style={{ background: "#034422" }}
                  />
                  <p className="relative text-4xl md:text-5xl font-black mb-2 text-[#034422]">
                    +120 mil
                  </p>
                  <p className="relative text-lg font-bold mb-1 text-[#034422]">
                    Toneladas/mês
                  </p>
                  <p className="relative text-sm text-[#034422]/80 leading-snug">
                    De resíduos coletadas por mês em todo o Brasil
                  </p>
                </div>
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-[1.5px]"
                  style={{
                    left: "-80px",
                    height: "3px",
                    width: "80px",
                    background: "#c3cd86",
                  }}
                />
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-1/2"
                  style={{
                    left: "-91px",
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderRight: "11px solid #c3cd86",
                  }}
                />
              </div>
            </div>

            {/* ── Bottom Left — verde claro ── */}
            <div className="flex items-center justify-center md:justify-end md:pr-10">
              <div className="relative w-full max-w-xs">
                <div
                  className="relative rounded-2xl p-5 md:p-7 shadow-xl overflow-hidden"
                  style={{ background: "#c3cd86" }}
                >
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-30"
                    style={{ background: "#034422" }}
                  />
                  <p className="relative text-4xl md:text-5xl font-black mb-2 text-[#034422]">
                    +35 anos
                  </p>
                  <p className="relative text-lg font-bold mb-1 text-[#034422]">
                    De Atuação
                  </p>
                  <p className="relative text-sm text-[#034422]/80 leading-snug">
                    Excelência em gestão de resíduos desde 1990
                  </p>
                </div>
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-[1.5px]"
                  style={{
                    right: "-80px",
                    height: "3px",
                    width: "80px",
                    background: "#c3cd86",
                  }}
                />
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-1/2"
                  style={{
                    right: "-91px",
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "11px solid #c3cd86",
                  }}
                />
              </div>
            </div>

            {/* ── Bottom Right — verde escuro ── */}
            <div className="flex items-center justify-center md:justify-start md:pl-10">
              <div className="relative w-full max-w-xs">
                <div
                  className="relative rounded-2xl p-5 md:p-7 text-white shadow-xl overflow-hidden"
                  style={{ background: "#034422" }}
                >
                  <div
                    className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20"
                    style={{ background: "#c3cd86" }}
                  />
                  <p className="relative text-4xl md:text-5xl font-black mb-2">
                    +400
                  </p>
                  <p className="relative text-lg font-bold mb-1">Caminhões</p>
                  <p className="relative text-sm text-green-200/80 leading-snug">
                    Frota moderna e adaptada para diversas frentes de serviço
                  </p>
                </div>
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-[1.5px]"
                  style={{
                    left: "-80px",
                    height: "3px",
                    width: "80px",
                    background: "#034422",
                  }}
                />
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-1/2"
                  style={{
                    left: "-91px",
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderRight: "11px solid #034422",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Nossa Presença Nacional ── */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nossa Presença <span style={{ color: "#038242" }}>Nacional</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
              Atuamos em municípios de todo o Brasil com equipes e estrutura
              dedicadas a cada região.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 min-w-0">
              <MapaBrasil className="w-full max-w-lg mx-auto" />
            </div>
            <StateList />
          </div>
        </div>
      </div>

      {/* ── Sangue Verde: O DNA da LOCAR ── */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna esquerda — Texto */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span style={{ color: "#034422" }}>Sangue Verde:</span>{" "}
                <span className="text-gray-400 text-3xl md:text-4xl font-semibold block mt-1">
                  O DNA da LOCAR
                </span>
              </h2>

              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Na LOCAR, ter{" "}
                  <span className="font-semibold" style={{ color: "#038242" }}>
                    sangue verde
                  </span>{" "}
                  é mais do que vestir um uniforme, é carregar no coração o
                  compromisso com a sustentabilidade, a excelência e o respeito
                  às comunidades.
                </p>
                <p>
                  Esse conceito representa nossa cultura organizacional,
                  presente em cada colaborador, em cada operação, em cada
                  cidade. É o que nos move a entregar soluções ambientais com
                  responsabilidade, inovação e foco no futuro.
                </p>
              </div>

              <p
                className="mt-6 font-semibold text-base"
                style={{ color: "#038242" }}
              >
                Sangue verde é a essência da LOCAR.
              </p>

              {/* <img
                src="/images/planta_locar.png"
                alt="Planta Locar"
                className="mt-8 max-w-[180px] object-contain"
              /> */}
            </div>

            {/* Coluna direita — Missão, Visão, Valores */}
            <div className="space-y-6">
              {/* Missão */}
              <div>
                <p
                  className="text-xl font-bold mb-3"
                  style={{ color: "#038242" }}
                >
                  Nossa Missão
                </p>
                <div
                  className="flex items-start gap-4 rounded-2xl p-5 shadow-md"
                  style={{ background: "#034422" }}
                >
                  <Rocket
                    className="w-8 h-8 flex-shrink-0 mt-0.5"
                    style={{ color: "#c3cd86" }}
                  />
                  <p className="text-white text-sm leading-relaxed">
                    Promover a gestão ambiental responsável e inovadora,
                    oferecendo serviços de qualidade em gestão de resíduos e
                    engenharia, para garantir um futuro mais limpo e sustentável
                    mantendo o compromisso como meio ambiente e respeitando as
                    futuras gerações.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div>
                <p
                  className="text-xl font-bold mb-3"
                  style={{ color: "#038242" }}
                >
                  Nossa Visão
                </p>
                <div
                  className="flex items-start gap-4 rounded-2xl p-5 shadow-md"
                  style={{ background: "#034422" }}
                >
                  <Eye
                    className="w-8 h-8 flex-shrink-0 mt-0.5"
                    style={{ color: "#c3cd86" }}
                  />
                  <p className="text-white text-sm leading-relaxed">
                    Alcançar a excelência em serviços ambientais promovendo a
                    sustentabilidade, e a inovação como pilares para o
                    desenvolvimento de comunidades e cidades sustentáveis, nos
                    próximos 10 anos, expandindo nossa atuação para novas áreas
                    e mercados na America Latina.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div>
                <p
                  className="text-xl font-bold mb-3"
                  style={{ color: "#038242" }}
                >
                  Nossos Valores
                </p>
                <div
                  className="flex items-start gap-4 rounded-2xl p-5 shadow-md"
                  style={{ background: "#034422" }}
                >
                  <Leaf
                    className="w-8 h-8 flex-shrink-0 mt-0.5"
                    style={{ color: "#c3cd86" }}
                  />
                  <p className="text-white text-sm leading-relaxed">
                    Confiança: Agimos com honestidade, ética, integridade,
                    lealdade e respeito. Foco em Resultados: Alinhamos nosso
                    trabalho ao planejamento estratégico, buscando a eficiência
                    e a excelência. Ser o Melhor na Nossa Atividade: Buscamos
                    ser 1% melhores a cada dia, com autonomia, proatividade e
                    desenvolvimento contínuo. Pertencer à equipe: Valorizamos a
                    colaboração, o respeito, a diversidade, o crescimento mútuo
                    e o trabalho em equipe. Qualidade no Serviço Prestado:
                    Oferecemos serviços de alta qualidade, respeitando processos
                    e buscando melhorias contínuas. Responsabilidade Social:
                    Reconhecemos as diferenças culturais, econômicas e
                    ambientais nas regiões onde operamos, adaptando nossos
                    serviços para atender às necessidades específicas de cada
                    local. Inovação: Encorajamos a criatividade, aceitando o
                    risco como parte do processo de inovação, incentivando a
                    atualização tecnológica e valorizando o feedback e a
                    agilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrupoPage;
