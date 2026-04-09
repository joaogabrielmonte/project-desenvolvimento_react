/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  21/10/2025
 * @version    2.0 (30/03/2026)
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertTriangle, Building, ShieldCheck, ArrowRight } from "lucide-react";

// Componente para a mensagem flutuante (Toast)
const Toast = ({ message, type, onclose }) => {
  useEffect(() => {
    const timer = setTimeout(() => { onclose(); }, 5000);
    return () => clearTimeout(timer);
  }, [onclose]);

  const isSuccess = type === 'success';
  return (
    <div className={`fixed bottom-5 right-5 flex items-center p-4 rounded-lg shadow-lg text-white transition-transform transform animate-fade-in-up ${isSuccess ? 'bg-green-600' : 'bg-red-600'}`}>
      {isSuccess ? <CheckCircle className="w-6 h-6 mr-3" /> : <AlertTriangle className="w-6 h-6 mr-3" />}
      <span>{message}</span>
    </div>
  );
};

// Página de Contato
const ContatoPage = () => {
  const [filiais, setFiliais] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service_type: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, info: { error: false, msg: null } });

  useEffect(() => {
    fetch('./filiais.json')
      .then(res => res.json())
      .then(data => setFiliais(data))
      .catch(err => console.error("Erro ao carregar filiais:", err));
  }, []);

  const allowedEmailDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'locar.srv.br'];

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Nome é obrigatório.";
    if (!formData.email) {
      errors.email = "E-mail é obrigatório.";
    } else {
      const emailDomain = formData.email.split('@')[1];
      if (!allowedEmailDomains.includes(emailDomain)) {
        errors.email = "Por favor, use um e-mail de um provedor conhecido.";
      }
    }
    if (!formData.phone) errors.phone = "Telefone é obrigatório.";
    if (!formData.service_type) errors.service_type = "Selecione um serviço.";
    if (!formData.message) errors.message = "Mensagem é obrigatória.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').substring(0, 11);
    if (value.length > 2) value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    if (value.length > 9) value = `${value.substring(0, 10)}-${value.substring(10)}`;
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleServerResponse = (ok, msg) => {
    setStatus({ submitting: false, info: { error: !ok, msg } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
        setStatus({ submitting: false, info: { error: true, msg: "Por favor, corrija os erros antes de enviar." } });
        return;
    }
    setStatus({ submitting: true, info: { error: false, msg: null } });
    
    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(response => {
        if (response.ok) {
          handleServerResponse(true, "Obrigado! Sua solicitação foi enviada.");
          setFormData({ name: '', email: '', phone: '', service_type: '', message: '' });
        } else {
          response.json().then(data => {
            const errorMsg = data.errors ? data.errors.map(e => e.message).join(', ') : "Oops! Houve um problema ao enviar seu formulário.";
            handleServerResponse(false, errorMsg);
          });
        }
      }).catch(error => {
        handleServerResponse(false, error.toString());
      });
  };
  
  const isFormFilled = formData.name && formData.email && formData.phone && formData.service_type && formData.message;

  return (
    <div className="bg-white pt-28 pb-16">
      {status.info.msg && (
        <Toast 
          message={status.info.msg} 
          type={status.info.error ? 'error' : 'success'} 
          onclose={() => setStatus(prev => ({ ...prev, info: { ...prev.info, msg: null } }))} 
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Mail className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span style={{ color: "#038242" }}>Contato</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Entre em contato por telefone, e-mail ou acesse nossos canais digitais de atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Coluna 1: Canais de contato em destaque */}
          <div className="md:col-span-3 flex flex-col gap-5">

            {/* Telefone em destaque */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "linear-gradient(135deg, #022c16 0%, #034422 100%)" }}
            >
              <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">Central de Atendimento</p>
              <a
                href="tel:8121272525"
                className="text-5xl font-extrabold text-white tracking-tight hover:text-green-300 transition-colors block mb-2"
              >
                81 2127.2525
              </a>
              <p className="text-green-200/70 text-sm">Segunda a Sexta, 8h às 18h</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* E-mail */}
              <a
                href="mailto:atendimento@locar.srv.br"
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#e6f4ec" }}
                >
                  <Mail className="w-6 h-6" style={{ color: "#034422" }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">E-mail</p>
                  <p className="text-gray-900 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    atendimento@locar.srv.br
                  </p>
                </div>
              </a>

              {/* Endereço */}
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#e6f4ec" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "#034422" }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Sede</p>
                  <p className="text-gray-900 font-semibold text-sm leading-snug">
                    Estrada das Ubaias, 540<br />
                    <span className="font-normal text-gray-500">Casa Forte — Recife/PE</span>
                  </p>
                </div>
              </div>

              {/* Ouvidoria */}
              <a
                href="/ouvidoria"
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#e6f4ec" }}
                >
                  <ShieldCheck className="w-6 h-6" style={{ color: "#034422" }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Canal de Ouvidoria</p>
                  <p className="text-gray-900 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    Críticas, sugestões e denúncias
                  </p>
                </div>
              </a>

              {/* Denúncia anônima */}
              <a
                href="/denuncia"
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#e6f4ec" }}
                >
                  <ArrowRight className="w-6 h-6" style={{ color: "#034422" }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Denúncia Anônima</p>
                  <p className="text-gray-900 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    100% sigiloso, sem identificação
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Coluna 2: Filiais (ocupa 2 de 5) */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossas Filiais</h3>
            <div className="space-y-6">
              {filiais.map((filial) => (
                <div key={filial.id} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-lg p-3">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">{filial.name}</h4>
                    <p className="text-gray-600 text-sm leading-snug">
                      {filial.address}<br/>
                      {filial.neighborhood} - {filial.cityState}<br/>
                      {filial.cep}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Banner Ouvidoria */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#022c16] to-[#034422] border border-green-700/40 p-8 md:p-10">
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-green-500/10" />
          <div className="absolute -right-4 -bottom-10 w-32 h-32 rounded-full bg-green-400/10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Ícone ouvidoria */}
            <div className="flex-shrink-0 bg-green-500/20 rounded-2xl p-4">
              <ShieldCheck className="w-10 h-10 text-green-400" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">Canal de Ouvidoria</h3>
              <p className="text-green-200/80 text-sm">
                Críticas, sugestões ou denúncias? Fale conosco de forma segura e confidencial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <div className="flex flex-col gap-2">
                <a
                  href="tel:08000020202"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-400 text-[#022c16] font-bold rounded-xl hover:bg-green-300 transition-colors whitespace-nowrap text-sm"
                >
                  <Phone className="w-4 h-4" />
                  0800 002 0202
                </a>
                <a
                  href="tel:8121272525"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap text-sm"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  81 2127.2525
                </a>
              </div>
              <Link
                to="/ouvidoria"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap"
              >
                Acessar Ouvidoria
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;

