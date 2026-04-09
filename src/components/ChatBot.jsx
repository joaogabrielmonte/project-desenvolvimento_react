/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Sparkles } from "lucide-react";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SYSTEM_PROMPT = `Você é o assistente virtual da Locar Gestão de Resíduos, empresa pioneira em limpeza urbana e gestão de resíduos em Pernambuco, fundada nos anos 90 com mais de 35 anos de história.

Responda sempre em português brasileiro, de forma clara, objetiva e cordial. Limite suas respostas a no máximo 3 parágrafos curtos.

### SOBRE O GRUPO LOCAR
O Grupo Locar é uma empresa familiar consolidada no mercado ambiental do Nordeste brasileiro, com mais de 35 anos de atuação. Conta com mais de 4.000 colaboradores, mais de 400 caminhões, atende mais de 200 municípios em 12 estados e já atendeu mais de 1.000 empresas. Tem sede em Recife/PE e atua como líder regional em gestão de resíduos sólidos, saneamento e educação ambiental.

### EMPRESAS DO GRUPO
- Locar Gestão de Resíduos: Pioneira em Pernambuco, especializada em limpeza urbana e resíduos sólidos urbanos (RSU) desde os anos 90.
- GTR Ambiental: Focada em gestão e transporte de resíduos industriais, com ênfase em qualidade e sustentabilidade.
- I9 Paulista: Concessão dos resíduos sólidos de Paulista/PE por 25 anos — gestão completa e de longo prazo.
- I9 Jequié: Concessão dos resíduos sólidos de Jequié/BA com soluções eficientes e sustentáveis.

### SERVIÇOS (página /servicos)
1. Coleta de Resíduos Sólidos — domiciliar, containerizada, comercial, seletiva, hospitalar, poda de árvores, volumosos, construção civil.
2. Varrição de Vias — limpeza de logradouros públicos, remoção de areia, folhas, papéis e resíduos de calçadas.
3. Capinação e Pintura de Meio Fio — capinação manual e pintura de guias em ruas, passeios e margens de rios.
4. Limpeza de Feiras e Praias — remoção rápida após feiras livres; limpeza de praias manual ou mecânica.
5. Unidade de Transferência — descarrego temporário de resíduos com logística otimizada.
6. Operação de Aterro Sanitário — projeto, remediação, construção e operação com destinação ambientalmente correta.
7. Educação Ambiental (Projeto Educar) — cursos, debates e programas de engajamento comunitário para mudança de comportamento.

### COMPROMISSO AMBIENTAL (página /meio-ambiente)
Investimento em tecnologia de ponta para destinação adequada de resíduos e programas de educação ambiental. 99% de destinação adequada. A empresa transforma o lixo em recurso, protegendo os ecossistemas.

### PESSOAS & CULTURA (página /pessoas-cultura)
Mais de 4.000 colaboradores. Ambiente de trabalho seguro com qualificação contínua. Equipe especializada e certificada pelos principais órgãos ambientais. Para vagas de emprego, acesse: https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/

### PÁGINAS DO SITE
- Início (/) — apresentação institucional com foto real da operação
- Grupo (/grupo) — história, empresas do grupo e mapa de atuação nacional
- Serviços (/servicos) — todos os serviços detalhados
- Meio Ambiente (/meio-ambiente) — compromisso ambiental e indicadores
- Pessoas & Cultura (/pessoas-cultura) — carreira, equipe e valores
- Filiais (/filiais) — lista de filiais por estado
- Comunicados (/comunicados) — comunicados oficiais da empresa
- Contato (/contato) — formulário de contato e solicitação de orçamento
- Ouvidoria (/ouvidoria) — reclamações, sugestões e elogios
- Denúncia Anônima (/denuncia) — canal seguro e sigiloso de denúncia

### REGRAS DE ENCAMINHAMENTO
- Reclamações, sugestões ou elogios → oriente a acessar /ouvidoria
- Orçamentos ou contratos → oriente a acessar /contato
- Denúncias anônimas → oriente a acessar /denuncia
- Vagas de emprego → https://jobs.peixe30.com/carreiras/locar-saneamento-ambiental/vagas/

Não responda perguntas completamente fora do contexto da empresa, dos serviços prestados ou do meio ambiente.`;

const INITIAL_MESSAGE = {
  role: "model",
  text: "Olá! 👋 Sou o assistente virtual da **Locar Gestão de Resíduos**. Como posso te ajudar hoje?\n\nPosso responder dúvidas sobre nossos serviços, nossa história, sustentabilidade, filiais ou te direcionar para o canal certo.",
};

const QUICK_QUESTIONS = [
  "Quais são os serviços da Locar?",
  "Qual é a história da Locar?",
  "Como entrar em contato?",
  "Quero fazer uma denúncia",
  "Tem vagas de emprego?",
];

function formatText(text) {
  // Converte **negrito** e quebras de linha para JSX simples
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j) => (
      <React.Fragment key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </React.Fragment>
    ));
  });
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasKey] = useState(!!API_KEY);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const sendMessage = async (quickText) => {
    const text = (quickText ?? input).trim();
    if (!text || loading) return;

    if (!quickText) setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      // Histórico no formato OpenAI (compatível com Groq)
      const history = messages
        .filter((_, i) => i > 0)
        .map((m) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.text,
        }));

      const body = {
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...history,
          { role: "user", content: text },
        ],
        max_tokens: 512,
        temperature: 0.7,
      };

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.error("Groq API error:", errData);
        throw new Error(errData?.error?.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const response = data?.choices?.[0]?.message?.content;

      if (!response) throw new Error("Resposta vazia da API");

      setMessages((prev) => [...prev, { role: "model", text: response }]);
    } catch (err) {
      console.error("Groq error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Desculpe, não consegui processar sua mensagem. Tente novamente ou entre em contato pelo (81) 2127.2525.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Abrir assistente virtual"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 focus:outline-none focus:ring-4 focus:ring-green-400/40"
        style={{ backgroundColor: "#038242" }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.03 2 11c0 2.7 1.22 5.12 3.17 6.83L4 22l4.46-1.48C9.55 20.82 10.75 21 12 21c5.52 0 10-4.03 10-9s-4.48-9-10-9z" fill="white" opacity="0.9"/>
            <circle cx="8.5" cy="11" r="1.2" fill="#038242"/>
            <circle cx="12" cy="11" r="1.2" fill="#038242"/>
            <circle cx="15.5" cy="11" r="1.2" fill="#038242"/>
          </svg>
        )}
      </button>

      {/* Janela do chat */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: 480, border: "1px solid #e5e7eb" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #038242 0%, #025c2e 100%)" }}
          >
            <div className="flex items-center gap-3">
              {/* Avatar com logo */}
              <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center overflow-hidden">
                <img src="/images/locar.png" alt="Locar" className="w-7 h-7 object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="font-semibold text-sm leading-none tracking-wide">Assistente Locar</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-xs text-green-100">Online agora</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sem chave configurada */}
          {!hasKey && (
            <div className="flex-1 flex items-center justify-center bg-gray-50 p-6 text-center">
              <div>
                <Sparkles className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  Configure a chave <code className="bg-gray-100 px-1 rounded">VITE_GROQ_API_KEY</code> no arquivo <code className="bg-gray-100 px-1 rounded">.env</code> para ativar o assistente.
                </p>
              </div>
            </div>
          )}

          {/* Mensagens */}
          {hasKey && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm border border-gray-100"
                    }`}
                    style={msg.role === "user" ? { backgroundColor: "#038242" } : {}}
                  >
                    {formatText(msg.text)}
                  </div>
                </div>
              ))}

              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-green-200 text-green-700 bg-white hover:bg-green-50 transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-green-600 animate-spin" />
                    <span className="text-sm text-gray-500">Digitando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input */}
          {hasKey && (
            <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-200 flex-shrink-0">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                rows={1}
                disabled={loading}
                className="flex-1 resize-none px-3 py-2 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 disabled:opacity-60"
                style={{ maxHeight: 80 }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                aria-label="Enviar mensagem"
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
                style={{ backgroundColor: "#038242" }}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
