import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertTriangle, Building } from "lucide-react";

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
            Tem alguma dúvida ou precisa de um orçamento? Preencha o formulário abaixo ou entre em contato através de uma de nossas unidades.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Coluna 1: Formulário (ocupa 3 de 5) */}
          <div className="md:col-span-3 bg-gray-50 p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xovkrbwr" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <input type="text" name="name" placeholder="Nome completo" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500" />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input type="email" name="email" placeholder="Seu melhor e-mail" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500" />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="(DD) 9XXXX-XXXX" required value={formData.phone} onChange={handlePhoneChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500" />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <select name="service_type" required value={formData.service_type} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-green-500">
                    <option value="">Selecione o tipo de serviço...</option>
                    <option value="Coleta Urbana">Coleta de Resíduos Urbanos</option>
                    <option value="Gestao Industrial">Gestão de Resíduos Industriais</option>
                    <option value="Orcamento">Solicitação de Orçamento</option>
                    <option value="Outros">Outros Assuntos</option>
                  </select>
                  {formErrors.service_type && <p className="text-red-500 text-sm mt-1">{formErrors.service_type}</p>}
                </div>
                <div className="sm:col-span-2">
                  <textarea name="message" placeholder="Descreva suas necessidades..." rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 resize-none" />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={!isFormFilled || status.submitting} className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    <Send className="w-5 h-5 mr-2" />
                    {status.submitting ? 'Enviando...' : 'Enviar Solicitação'}
                  </button>
                </div>
              </div>
            </form>
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
      </div>
    </div>
  );
};

export default ContatoPage;

