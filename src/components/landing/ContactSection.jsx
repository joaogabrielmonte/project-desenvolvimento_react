import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertTriangle } from "lucide-react";

// Componente para a mensagem flutuante (Toast)
const Toast = ({ message, type, onclose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onclose();
    }, 5000); // A mensagem desaparece após 5 segundos

    return () => clearTimeout(timer);
  }, [onclose]);

  const isSuccess = type === 'success';
  
  // Cor do Toast volta para o verde padrão
  return (
    <div className={`fixed bottom-5 right-5 flex items-center p-4 rounded-lg shadow-lg text-white transition-transform transform animate-fade-in-up ${isSuccess ? 'bg-green-600' : 'bg-red-600'}`}>
      {isSuccess ? <CheckCircle className="w-6 h-6 mr-3" /> : <AlertTriangle className="w-6 h-6 mr-3" />}
      <span>{message}</span>
    </div>
  );
};

// Componente principal da seção de contato
const ContactSection = () => {
  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: '',
  });

  // Estado para os erros de validação
  const [formErrors, setFormErrors] = useState({});
  // Estado para o status do envio
  const [status, setStatus] = useState({ submitting: false, info: { error: false, msg: null } });

  const allowedEmailDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com', 'locar.srv.br'];

  // Valida o formulário
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
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.substring(0, 11); // Limita a 11 dígitos (DD + 9 dígitos)
    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 9) {
      value = `${value.substring(0, 10)}-${value.substring(10)}`;
    }
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

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        handleServerResponse(true, "Obrigado! Sua solicitação foi enviada.");
        setFormData({ name: '', email: '', phone: '', service_type: '', message: '' }); // Limpa o formulário
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
    // Fundo atualizado para um verde corporativo bem escuro
    <section id="contato" className="py-20 bg-[#022c16] text-white">
      {status.info.msg && (
        <Toast 
          message={status.info.msg} 
          type={status.info.error ? 'error' : 'success'} 
          onclose={() => setStatus(prev => ({ ...prev, info: { ...prev.info, msg: null } }))} 
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* Cor de destaque volta para o verde claro */}
            Entre em <span className="text-green-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para implementar soluções sustentáveis na sua empresa?
            Nossa equipe está à disposição para ajudar você.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                {/* Ícones atualizados para verde */}
                <Phone className="w-6 h-6 text-green-400 mr-4" />
                <div>
                  <p className="text-gray-300">Telefone</p>
                  <a href="tel:8121272525" className="text-white font-semibold hover:text-green-300">81 2127.2525</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-400 mr-4" />
                <div>
                  <p className="text-gray-300">E-mail</p>
                  <a href="mailto:atendimento@locar.srv.br" className="text-white font-semibold hover:text-green-300">
                    atendimento@locar.srv.br
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-400 mr-4 mt-1" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <p className="text-white font-semibold">
                    ESTRADA DAS UBAIAS, Nº 540, 8º ANDAR<br />
                    CASA FORTE - RECIFE - PE - CEP: 52061-080
                  </p>
                </div>
              </div>
            </div>
            <div className="h-64 rounded-xl overflow-hidden">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.480327339089!2d-34.91266002499616!3d-8.05219919197607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18edd222621b%3A0x8dd0b1351112444b!2sEstr.%20das%20Ubaias%2C%20540%20-%20Casa%20Forte%2C%20Recife%20-%20PE%2C%2052061-080!5e0!3m2!1spt-BR!2sbr!4v1729220074219!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Fundo do formulário atualizado para um verde mais claro */}
          <div className="bg-green-900/20 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xovkrbwr" method="POST">
              <div className="space-y-4">
                {/* Campos do formulário com cores atualizadas */}
                <div>
                  <input type="text" name="name" placeholder="Nome completo" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500" />
                  {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input type="email" name="email" placeholder="Seu melhor e-mail" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500" />
                  {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="(DD) 9XXXX-XXXX" required value={formData.phone} onChange={handlePhoneChange} className="w-full px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500" />
                  {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                <div>
                  <select name="service_type" required value={formData.service_type} onChange={handleChange} className="w-full px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500">
                    <option value="">Selecione o tipo de serviço...</option>
                    <option value="Coleta Urbana">Coleta de Resíduos Urbanos</option>
                    <option value="Gestao Industrial">Gestão de Resíduos Industriais</option>
                    <option value="Orcamento">Solicitação de Orçamento</option>
                    <option value="Outros">Outros Assuntos</option>
                  </select>
                  {formErrors.service_type && <p className="text-red-400 text-sm mt-1">{formErrors.service_type}</p>}
                </div>
                <div>
                  <textarea name="message" placeholder="Descreva suas necessidades" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 resize-none" />
                  {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                </div>
                {/* Botão de envio com gradiente de verde */}
                <button type="submit" disabled={!isFormFilled || status.submitting} className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-5 h-5 mr-2" />
                  {status.submitting ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

