import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PoliticaPrivacidadePage() {
  return <div className="min-h-screen bg-gray-50 pt-28 pb-20"><div className="max-w-4xl mx-auto px-4 sm:px-6">
    <header className="bg-gradient-to-br from-[#034422] to-[#081c30] text-white rounded-2xl p-8 sm:p-12 mb-8">
      <ShieldCheck className="w-10 h-10 text-[#c3cd86] mb-4" aria-hidden="true" />
      <h1 className="text-3xl sm:text-4xl font-bold">Privacidade e dados pessoais</h1>
      <p className="mt-3 text-gray-200">Informações sobre a navegação e os canais de atendimento do Grupo Locar.</p>
    </header>
    <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 text-gray-700 leading-relaxed space-y-8">
      <section><h2 className="text-xl font-bold text-gray-900 mb-3">Dados enviados por você</h2><p>Ao usar os formulários de contato, ouvidoria ou denúncia, você pode fornecer dados de contato e informações sobre sua solicitação. Evite enviar dados pessoais ou sensíveis que não sejam necessários ao atendimento.</p></section>
      <section><h2 className="text-xl font-bold text-gray-900 mb-3">Armazenamento local e conteúdo externo</h2><p>O site armazena no seu navegador a confirmação de leitura do aviso de privacidade. Você pode removê-la nas configurações do navegador. O mapa do Google na seção de contato é carregado apenas quando solicitado; ao carregá-lo, o Google recebe dados da conexão e pode usar tecnologias próprias. Consulte a <a className="text-green-700 underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Google</a>.</p></section>
      <section><h2 className="text-xl font-bold text-gray-900 mb-3">Seus direitos e contato</h2><p>A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) prevê direitos sobre seus dados pessoais, incluindo acesso, correção e, nas hipóteses aplicáveis, eliminação e revogação do consentimento. Para enviar uma solicitação ou tirar dúvidas, escreva para <a className="text-green-700 underline" href="mailto:atendimento@locar.srv.br">atendimento@locar.srv.br</a>.</p></section>
    </div>
  </div></div>;
}
