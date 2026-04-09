/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
// src/pages/DenunciaPage.jsx
import React, { useState, useCallback } from "react";
import {
  Lock,
  AlertTriangle,
  CheckCircle,
  Send,
  ShieldCheck,
  EyeOff,
  ChevronRight,
} from "lucide-react";

const CATEGORIES = [
  { value: "", label: "Selecione o tipo de denúncia..." },
  { value: "assedio_moral",      label: "Assédio Moral",           desc: "Humilhação, pressão excessiva ou tratamento degradante." },
  { value: "assedio_sexual",     label: "Assédio Sexual",          desc: "Comportamento de cunho sexual indesejado." },
  { value: "discriminacao",      label: "Discriminação",           desc: "Por raça, gênero, religião, orientação ou outras características." },
  { value: "fraude_corrupcao",   label: "Fraude / Corrupção",      desc: "Desvio de recursos, favorecimento ilícito ou irregularidades financeiras." },
  { value: "violacao_seguranca", label: "Violação de Segurança",   desc: "Descumprimento de normas de SST ou exposição a riscos." },
  { value: "conduta_inadequada", label: "Conduta Inadequada",      desc: "Comportamento contrário ao Código de Ética da LOCAR." },
  { value: "outros",             label: "Outros",                  desc: "Demais assuntos não listados acima." },
];

const GUARANTEES = [
  { icon: EyeOff,      title: "Anonimato total",      text: "Nenhum dado pessoal é coletado, armazenado ou rastreado neste canal." },
  { icon: ShieldCheck, title: "Sigilo absoluto",       text: "As informações são tratadas exclusivamente pela Diretoria de Compliance." },
  { icon: CheckCircle, title: "Sem retaliação",        text: "A LOCAR tem política de tolerância zero a qualquer forma de represália." },
];

const REPORTABLE = [
  "Assédio moral ou sexual",
  "Discriminação e preconceito",
  "Fraude ou corrupção",
  "Violações de segurança do trabalho",
  "Condutas antiéticas",
  "Irregularidades ambientais",
];

const INITIAL_FORM = { categoria: "", local: "", descricao: "" };

export default function DenunciaPage() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erros, setErros]     = useState({});
  const [protocolo, setProtocolo] = useState(null);
  const [copiado, setCopiado] = useState(false);

  const copiarProtocolo = useCallback(() => {
    if (!protocolo) return;
    const copy = (text) => {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
      }
      // fallback para HTTP/ngrok
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      return Promise.resolve();
    };
    copy(protocolo).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  }, [protocolo]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErros((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.categoria) e.categoria = "Selecione o tipo de denúncia.";
    if (!form.descricao || form.descricao.trim().length < 20)
      e.descricao = "Descreva com pelo menos 20 caracteres.";
    setErros(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setEnviando(true);
    try {
      const data = new FormData();
      data.append("nome",      "Anônimo");
      data.append("setor",     form.categoria);
      data.append("local",     form.local || "Não informado");
      data.append("descricao", form.descricao);
      const response = await fetch(
        import.meta.env.VITE_DENUNCIA_URL,
        { method: "POST", body: data }
      );
      if (response.ok) {
        const json = await response.json().catch(() => ({}));
        setProtocolo(json.protocolo || null);
        setEnviado(true);
        setForm(INITIAL_FORM);
      } else {
        setErros({ geral: "Erro ao enviar. Tente novamente." });
      }
    } catch {
      setErros({ geral: "Sem conexão com o servidor. Verifique a rede." });
    } finally {
      setEnviando(false);
    }
  };

  const selectedCategoryDesc = CATEGORIES.find((c) => c.value === form.categoria)?.desc;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── HEADER ── */}
      <div style={{ background: "#034422" }} className="pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <Lock className="w-7 h-7 text-white" />
          </div>
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "#86efac" }}
            >
              Ética &amp; Transparência
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Canal de Denúncia Anônima
            </h1>
            <p className="text-green-200 mt-1 text-sm md:text-base">
              Fale com segurança. Sua identidade é completamente protegida.
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── COLUNA ESQUERDA: informações ── */}
          <aside className="lg:col-span-2 space-y-5">

            {/* Painel sobre o canal */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3 text-base">
                Por que este canal existe?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Qualquer colaborador, prestador ou terceiro pode reportar irregularidades
                com <strong>total segurança</strong> — sem formulários de identificação,
                sem registro de IP, sem qualquer dado que permita rastreá-lo.
              </p>
            </div>

            {/* Garantias */}
            <div className="space-y-3">
              {GUARANTEES.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#e6f4ec" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#034422" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* O que posso denunciar */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                O que posso denunciar?
              </h3>
              <ul className="space-y-2">
                {REPORTABLE.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <ChevronRight
                      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                      style={{ color: "#038242" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rodapé informativo */}
            <p className="text-xs text-gray-400 leading-relaxed px-1">
              As denúncias são recebidas pela Diretoria de Compliance e apuradas com
              base no Código de Ética da LOCAR. O prazo médio de retorno interno é de
              até 30 dias úteis.
            </p>
          </aside>

          {/* ── COLUNA DIREITA: formulário ── */}
          <div className="lg:col-span-3">
            {enviado ? (
              /* ── SUCESSO ── */
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "#e6f4ec" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "#034422" }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Denúncia registrada
                </h3>
                {protocolo && (
                  <div
                    className="inline-flex items-center gap-3 mt-2 mb-4 px-5 py-2 rounded-xl text-sm font-mono font-semibold"
                    style={{ background: "#e6f4ec", color: "#034422" }}
                  >
                    <span>Protocolo: {protocolo}</span>
                    <button
                      onClick={copiarProtocolo}
                      className="text-xs px-2 py-1 rounded-lg font-semibold transition-colors"
                      style={{ background: copiado ? "rgba(3,68,34,0.15)" : "rgba(3,68,34,0.15)", color: copiado ? "#038242" : "#034422", outline: copiado ? "1.5px solid #038242" : "none" }}
                    >
                      {copiado ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                )}
                <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                  Sua denúncia foi recebida e será apurada com total sigilo.
                  Obrigado por contribuir com um ambiente de trabalho ético e seguro.
                </p>
                <button
                  onClick={() => { setEnviado(false); setProtocolo(null); }}
                  className="px-7 py-2.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-80"
                  style={{ background: "#034422" }}
                >
                  Registrar nova denúncia
                </button>
              </div>
            ) : (
              /* ── FORMULÁRIO ── */
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Cabeçalho do card */}
                <div className="px-8 py-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Registrar Denúncia</h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Todos os campos marcados com * são obrigatórios.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="px-8 py-7 space-y-6">

                  {/* Tipo de denúncia */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Tipo de denúncia *
                    </label>
                    <select
                      name="categoria"
                      value={form.categoria}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition bg-white text-gray-700"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.value} value={c.value} disabled={c.value === ""}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    {selectedCategoryDesc && (
                      <p className="text-xs text-gray-400 mt-1.5 ml-1">
                        {selectedCategoryDesc}
                      </p>
                    )}
                    {erros.categoria && (
                      <p className="text-xs text-red-500 mt-1.5 ml-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {erros.categoria}
                      </p>
                    )}
                  </div>

                  {/* Local */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Local / Unidade{" "}
                      <span className="font-normal text-gray-400">(opcional)</span>
                    </label>
                    <input
                      name="local"
                      value={form.local}
                      onChange={handleChange}
                      placeholder="Ex: Filial Jaboatão dos Guararapes"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                    />
                  </div>

                  {/* Descrição */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Descrição detalhada *
                    </label>
                    <textarea
                      name="descricao"
                      value={form.descricao}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Descreva o ocorrido com o máximo de detalhes: o que aconteceu, quando, quem estava envolvido, contexto..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
                    />
                    <div className="flex items-center justify-between mt-1.5 ml-1">
                      {erros.descricao ? (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {erros.descricao}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-gray-300 flex-shrink-0">
                        {form.descricao.length} caracteres
                      </span>
                    </div>
                  </div>

                  {erros.geral && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      {erros.geral}
                    </div>
                  )}

                  {/* Rodapé do form */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                      Ao enviar, você confirma que as informações são verídicas.
                      Nenhum dado de identificação é coletado.
                    </p>
                    <button
                      type="submit"
                      disabled={enviando}
                      className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "#034422" }}
                    >
                      <Send className="w-4 h-4" />
                      {enviando ? "Enviando..." : "Enviar denúncia"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
