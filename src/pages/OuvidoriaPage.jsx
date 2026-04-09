/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useCallback } from "react";
import {
  Send,
  CheckCircle,
  AlertTriangle,
  X,
  Eye,
  EyeOff,
  ShieldCheck,
  FileImage,
  ClipboardList,
} from "lucide-react";

// ─── Categorias de denúncia ───────────────────────────────
const CATEGORIES = [
  { value: "", label: "Selecione o tipo de denúncia..." },
  {
    value: "irregularidade_ambiental",
    label: "Irregularidade Ambiental",
    desc: "Descarte irregular, contaminação, poluição.",
  },
  {
    value: "conduta_funcionario",
    label: "Conduta de Funcionário",
    desc: "Comportamento inadequado de colaboradores.",
  },
  {
    value: "qualidade_servico",
    label: "Qualidade do Serviço",
    desc: "Falha, atraso ou prestação inadequada de serviços.",
  },
  {
    value: "descarte_irregular",
    label: "Descarte Irregular de Resíduos",
    desc: "Resíduos despejados em local inadequado.",
  },
  {
    value: "atendimento",
    label: "Atendimento ao Cliente",
    desc: "Dificuldades de comunicação ou atendimento ruim.",
  },
  {
    value: "outros",
    label: "Outros",
    desc: "Demais assuntos não listados acima.",
  },
];

// ─── Validação de imagem ──────────────────────────────────
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE_MB = 5;
const MAX_FILES = 3;

function validateImage(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return "Apenas imagens JPG, PNG ou WEBP são aceitas.";
  }
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return `O arquivo deve ter no máximo ${MAX_FILE_SIZE_MB}MB.`;
  }
  return null;
}

// ─── Toast ────────────────────────────────────────────────
const Toast = ({ message, type, protocolo, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = type === "success";

  const copyProtocol = () => {
    if (!protocolo) return;
    const copy = (text) => {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
      }
      // fallback para HTTP/ngrok
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      return Promise.resolve();
    };
    copy(protocolo).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-28 sm:w-full sm:max-w-sm flex flex-col gap-2 p-4 rounded-xl shadow-xl text-white z-[60] ${
        isSuccess ? "bg-green-600" : "bg-red-600"
      }`}
    >
      <div className="flex items-center">
        {isSuccess ? (
          <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
        ) : (
          <AlertTriangle className="w-6 h-6 mr-3 flex-shrink-0" />
        )}
        <span className="text-sm leading-tight break-words">{message}</span>
      </div>

      {/* PROTOCOLO COM COPY */}
      {protocolo && (
        <div className="bg-white/10 rounded-lg p-2 flex items-center justify-between">
          <span className="text-xs font-mono">{protocolo}</span>
          <button
            onClick={copyProtocol}
            className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition"
          >
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      )}
    </div>
  );
};

// ─── Componente principal ─────────────────────────────────
const OuvidoriaPage = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [images, setImages] = useState([]); // { file, preview, error }
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const selectedCategory = CATEGORIES.find(
    (c) => c.value === formData.category,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  // ── Upload de imagens ──────────────────────────────────
  const handleImageSelect = useCallback(
    (files) => {
      const remaining = MAX_FILES - images.length;
      if (remaining <= 0) return;

      const toProcess = Array.from(files).slice(0, remaining);
      const newImages = toProcess.map((file) => {
        const error = validateImage(file);
        const preview = error ? null : URL.createObjectURL(file);
        return { file, preview, error };
      });

      setImages((prev) => [...prev, ...newImages]);
    },
    [images.length],
  );

  const removeImage = (index) => {
    setImages((prev) => {
      const copy = [...prev];
      if (copy[index].preview) URL.revokeObjectURL(copy[index].preview);
      copy.splice(index, 1);
      return copy;
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageSelect(e.dataTransfer.files);
  };

  // ── Validação ──────────────────────────────────────────
  const validate = () => {
    const errors = {};
    if (!formData.category) errors.category = "Selecione o tipo de denúncia.";
    if (!isAnonymous && !formData.name)
      errors.name = "Nome é obrigatório ou marque 'Anônimo'.";
    if (!isAnonymous && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) errors.email = "E-mail inválido.";
    }
    if (!formData.description || formData.description.trim().length < 20)
      errors.description = "Descreva com pelo menos 20 caracteres.";
    const hasImageError = images.some((img) => img.error);
    if (hasImageError)
      errors.images = "Remova as imagens com erro antes de enviar.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ── Envio ──────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({
        submitting: false,
        info: { error: true, msg: "Corrija os erros antes de enviar." },
      });
      return;
    }
    setStatus({ submitting: true, info: { error: false, msg: null } });

    const data = new FormData();
    data.append("category", selectedCategory?.label || formData.category);
    data.append("anonymous", isAnonymous ? "Sim" : "Não");
    if (!isAnonymous) {
      data.append("name", formData.name);
      if (formData.email) data.append("email", formData.email);
      if (formData.phone) data.append("phone", formData.phone);
    } else {
      data.append("name", "Anônimo");
    }
    data.append("location", formData.location || "Não informado");
    data.append("description", formData.description);

    // Imagens válidas
    images
      .filter((img) => !img.error)
      .forEach((img, i) => data.append(`image_${i + 1}`, img.file));

    try {
      const response = await fetch(import.meta.env.VITE_OUVIDORIA_URL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const json = await response.json().catch(() => ({}));
        setStatus({
          submitting: false,
          info: {
            error: false,
            msg: "Denúncia registrada com sucesso!",
            protocolo: json.protocolo || null,
          },
        });
        setFormData({
          category: "",
          name: "",
          email: "",
          phone: "",
          location: "",
          description: "",
        });
        setImages([]);
        setIsAnonymous(false);
      } else {
        const jgiros_homologacao_2son = await response.json().catch(() => ({}));
        setStatus({
          submitting: false,
          info: {
            error: true,
            msg:
              json.error ||
              "Erro ao enviar. Tente novamente ou ligue: 81 2127.2525.",
          },
        });
      }
    } catch {
      setStatus({
        submitting: false,
        info: {
          error: true,
          msg: "Sem conexão. Verifique sua internet e tente novamente.",
        },
      });
    }
  };

  return (
    <div className="bg-gray-50 pt-28 pb-16">
      {status.info.msg && (
        <Toast
          message={status.info.msg}
          protocolo={status.info.protocolo}
          type={status.info.error ? "error" : "success"}
          onClose={() =>
            setStatus((prev) => ({
              ...prev,
              info: { ...prev.info, msg: null, protocolo: null },
            }))
          }
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{ backgroundColor: "#038242" }}
          >
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Canal de <span style={{ color: "#038242" }}>Ouvidoria</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Registre sua denúncia, reclamação ou sugestão com segurança. Todas
            as manifestações são tratadas com sigilo e seriedade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ── Coluna lateral: Info ─────────────── */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <ShieldCheck className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sigilo Garantido
              </h3>
              <p className="text-gray-600 text-sm">
                Sua identidade é protegida. Você pode registrar denúncias
                anonimamente se preferir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                O que você pode denunciar:
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.filter((c) => c.value).map((c) => (
                  <li key={c.value} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>{c.label}</strong> — {c.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-sm font-bold text-orange-800 mb-1">
                Emergências ambientais
              </h3>
              <p className="text-orange-700 text-sm">
                Para situações de risco imediato, ligue diretamente:{" "}
                <strong>81 2127.2525</strong>
              </p>
            </div>
          </div>

          {/* ── Formulário ──────────────────────── */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              noValidate
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Registrar Denúncia
              </h2>

              <div className="space-y-5">
                {/* Categoria / Filtro */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Tipo de Denúncia <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-green-500 bg-white ${
                      formErrors.category ? "border-red-400" : "border-gray-300"
                    }`}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  {selectedCategory?.value && (
                    <p className="text-xs text-green-700 mt-1 bg-green-50 px-3 py-1.5 rounded-md">
                      {selectedCategory.desc}
                    </p>
                  )}
                  {formErrors.category && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.category}
                    </p>
                  )}
                </div>

                {/* Toggle anônimo */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAnonymous((v) => !v);
                      setFormErrors((prev) => ({ ...prev, name: null }));
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      isAnonymous
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {isAnonymous ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    {isAnonymous
                      ? "Denúncia Anônima (ativada)"
                      : "Manter Anonimato"}
                  </button>
                  {isAnonymous && (
                    <p className="text-xs text-gray-500 mt-1.5">
                      Sua identidade não será associada a esta denúncia.
                    </p>
                  )}
                </div>

                {/* Dados do denunciante */}
                {!isAnonymous && (
                  <div className="grid sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="sm:col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider -mb-1">
                      Seus dados (opcionais para retorno)
                    </p>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nome completo"
                        className={`w-full px-4 py-2.5 border rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-green-500 ${
                          formErrors.name ? "border-red-400" : "border-gray-300"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail (opcional)"
                        className={`w-full px-4 py-2.5 border rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-green-500 ${
                          formErrors.email
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefone (opcional)"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>
                )}

                {/* Localidade */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Cidade / Filial relacionada
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ex: Caruaru – PE, Recife – PE..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Descrição */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Descrição da Denúncia{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Descreva detalhadamente o ocorrido: o que aconteceu, onde, quando e quem estava envolvido..."
                    className={`w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-green-500 resize-none ${
                      formErrors.description
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {formErrors.description ? (
                      <p className="text-red-500 text-xs">
                        {formErrors.description}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-gray-400">
                      {formData.description.length} caracteres
                    </span>
                  </div>
                </div>

                {/* Upload de imagens */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Evidências Fotográficas{" "}
                    <span className="font-normal text-gray-400">
                      (opcional, máx. {MAX_FILES} imagens)
                    </span>
                  </label>

                  {/* Drop zone */}
                  {images.length < MAX_FILES && (
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors cursor-pointer bg-gray-50"
                      onClick={() =>
                        document.getElementById("img-input").click()
                      }
                    >
                      <FileImage className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">
                        Arraste imagens aqui ou{" "}
                        <span className="text-green-600 font-medium">
                          clique para selecionar
                        </span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        JPG, PNG ou WEBP · máx. {MAX_FILE_SIZE_MB}MB por arquivo
                      </p>
                      <input
                        id="img-input"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                        className="hidden"
                        onChange={(e) => handleImageSelect(e.target.files)}
                      />
                    </div>
                  )}

                  {/* Pré-visualização */}
                  {images.length > 0 && (
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      {images.map((img, i) => (
                        <div
                          key={i}
                          className={`relative rounded-xl overflow-hidden border-2 ${
                            img.error ? "border-red-400" : "border-gray-200"
                          }`}
                        >
                          {img.preview ? (
                            <img
                              src={img.preview}
                              alt={`preview ${i + 1}`}
                              className="w-full h-24 object-cover"
                            />
                          ) : (
                            <div className="w-full h-24 bg-red-50 flex items-center justify-center">
                              <AlertTriangle className="w-6 h-6 text-red-400" />
                            </div>
                          )}
                          {img.error && (
                            <p className="absolute bottom-0 left-0 right-0 text-[10px] bg-red-500 text-white px-1 py-0.5 text-center leading-tight">
                              {img.error}
                            </p>
                          )}
                          <button
                            type="button"
                            onClick={() => removeImage(i)}
                            className="absolute top-1 right-1 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Remover imagem"
                          >
                            <X className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {formErrors.images && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.images}
                    </p>
                  )}
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#038242" }}
                >
                  <Send className="w-5 h-5" />
                  {status.submitting ? "Enviando..." : "Enviar Denúncia"}
                </button>

                <p className="text-xs text-center text-gray-400">
                  Ao enviar, você concorda que as informações fornecidas serão
                  usadas exclusivamente para apuração interna.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuvidoriaPage;
