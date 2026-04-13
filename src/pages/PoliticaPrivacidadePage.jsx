/**
 * @author     Joao Gabriel
 * @enterprise Execut Tecnologia
 * @initiated  09/04/2026
 * @version    1.0
 */
import React from "react";
import { ShieldCheck, Mail, Phone } from "lucide-react";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-green-600 pl-4">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PoliticaPrivacidadePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="bg-gradient-to-br from-[#034422] to-[#081c30] text-white rounded-2xl p-8 sm:p-12 mb-10 flex items-start gap-6">
          <ShieldCheck className="w-12 h-12 text-[#c3cd86] flex-shrink-0 mt-1" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Política de Privacidade
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              Em conformidade com a Lei Geral de Proteção de Dados Pessoais —{" "}
              <strong className="text-white">LGPD (Lei nº 13.709/2018)</strong>.
              Última atualização:{" "}
              <strong className="text-white">09 de abril de 2026</strong>.
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">

          <Section title="1. Controlador dos Dados">
            <p>
              O controlador responsável pelo tratamento dos seus dados pessoais é:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Razão Social:</strong> Locar Gestão de Resíduos Ltda.</li>
              <li><strong>Endereço:</strong> Estrada das Ubaias, nº 540, 8º Andar, Casa Forte — Recife/PE, CEP 52061-080</li>
              <li><strong>CNPJ:</strong> 35.474.949/0001-08</li>
              <li><strong>E-mail de contato:</strong>{" "}
                <a href="mailto:atendimento@locar.srv.br" className="text-green-600 hover:underline">
                  atendimento@locar.srv.br
                </a>
              </li>
            </ul>
          </Section>

          <Section title="2. Quais dados coletamos">
            <p>Coletamos dados pessoais apenas quando necessário e nas seguintes situações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Formulário de contato</strong> — nome, e-mail, telefone e mensagem, fornecidos
                voluntariamente. Os dados são encaminhados por e-mail diretamente para a equipe de
                atendimento (<em>atendimento@locar.srv.br</em>) e não são armazenados em banco de dados
                pelo site.
              </li>
              <li>
                <strong>Ouvidoria</strong> — dados de identificação fornecidos pelo manifestante,
                enviados ao sistema interno <em>sistemas.locar.srv.br</em> para registro e apuração.
              </li>
              <li>
                <strong>Canal de Ouvidoria Interna</strong> — <strong>anônimo por padrão</strong>: coletamos
                apenas categoria, local e descrição do fato, sem nenhum dado pessoal identificável.
              </li>
              <li>
                <strong>Cookies de preferência</strong> — armazenamos localmente (<em>localStorage</em>)
                apenas sua escolha sobre o uso de cookies (aceito/recusado). Nenhuma informação
                pessoal é incluída.
              </li>
              <li>
                <strong>Logs de acesso</strong> — endereço IP e dados técnicos de navegação
                registrados automaticamente pelo servidor de hospedagem, conforme exigido pelo
                Marco Civil da Internet (Lei nº 12.965/2014).
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Não coletamos dados sensíveis (origem racial, saúde, biometria, convicção religiosa
              etc.) através deste site. Não utilizamos ferramentas de análise comportamental,
              rastreamento por terceiros (Google Analytics, Meta Pixel etc.) nem cookies de publicidade.
            </p>
          </Section>

          <Section title="3. Finalidade e base legal do tratamento">
            <p>Tratamos seus dados com as seguintes finalidades e bases legais previstas na LGPD:</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Finalidade</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Base Legal (Art. 7º LGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Responder contatos e atender solicitações via formulário", "Consentimento"],
                    ["Receber e apurar manifestações de ouvidoria", "Consentimento / Obrigação legal"],
                    ["Receber denúncias (dado anônimo)", "Obrigação legal / Legítimo interesse"],
                    ["Salvar preferência de cookies no dispositivo", "Consentimento"],
                    ["Garantir a segurança e funcionamento do site", "Legítimo interesse"],
                    ["Logs de acesso exigidos pela Lei nº 12.965/2014", "Cumprimento de obrigação legal"],
                  ].map(([fin, base]) => (
                    <tr key={fin} className="border-b border-gray-100">
                      <td className="p-3 border border-gray-200">{fin}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Cookies">
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo. Este site utiliza
              <strong> apenas cookies essenciais e de preferência</strong> — sem rastreamento
              analítico ou publicidade:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
              <li><strong>Cookie de preferência de privacidade:</strong> armazena localmente
              (<em>localStorage</em>) a sua escolha sobre o banner de cookies. Nenhum dado
              pessoal é enviado a servidores.</li>
            </ul>
            <p>
              <strong>Não utilizamos</strong> cookies analíticos, cookies de terceiros,
              pixels de rastreamento nem ferramentas de monitoramento comportamental.
            </p>
            <p>
              Você pode aceitar ou recusar cookies pelo banner exibido no primeiro acesso.
              A recusa não impede a navegação no site.
            </p>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>
              Seus dados pessoais <strong>não são vendidos</strong> a terceiros. Podemos compartilhá-los apenas com:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prestadores de serviço tecnológico que atuam como operadores (hospedagem, e-mail), sob contrato e com as mesmas obrigações desta política.</li>
              <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
            </ul>
          </Section>

          <Section title="6. Retenção dos dados">
            <p>
              Os dados são retidos pelo tempo necessário para a finalidade que motivou a coleta, respeitando os prazos legais aplicáveis:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dados de formulários de contato: até 5 anos após a última interação.</li>
              <li>Dados de denúncias e ouvidoria: conforme exigência regulatória e legal.</li>
              <li>Logs de acesso (navegação): até 6 meses, conforme o Marco Civil da Internet (Lei nº 12.965/2014).</li>
            </ul>
          </Section>

          <Section title="7. Seus direitos como titular">
            <p>Nos termos dos artigos 17 a 22 da LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e obter uma cópia.</li>
              <li><strong>Correção:</strong> solicitar a atualização de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários ou tratados em desconformidade com a LGPD.</li>
              <li><strong>Portabilidade:</strong> obter seus dados em formato estruturado.</li>
              <li><strong>Revogação do consentimento:</strong> a qualquer momento, sem prejuízo à legalidade do tratamento anterior.</li>
              <li><strong>Oposição:</strong> contestar tratamentos realizados com base em legítimo interesse.</li>
              <li><strong>Reclamação à ANPD:</strong> encaminhar reclamação à Autoridade Nacional de Proteção de Dados.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:atendimento@locar.srv.br" className="text-green-600 hover:underline">
                atendimento@locar.srv.br
              </a>
              {" "}informando seu nome completo e o pedido. Responderemos em até 15 dias úteis.
            </p>
          </Section>

          <Section title="8. Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comunicação criptografada via HTTPS/TLS.</li>
              <li>Controle de acesso restrito a sistemas internos.</li>
              <li>Monitoramento e revisão periódica das práticas de segurança.</li>
            </ul>
          </Section>

          <Section title="9. Alterações nesta política">
            <p>
              Esta política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas através do site. Recomendamos que você a consulte regularmente. A data da última atualização está indicada no topo deste documento.
            </p>
          </Section>

          <Section title="10. Encarregado de Dados (DPO)">
            <p>
              Em cumprimento ao Art. 41 da LGPD, o canal de comunicação com o Encarregado pelo Tratamento de Dados Pessoais é:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <a
                href="mailto:atendimento@locar.srv.br"
                className="flex items-center gap-2 text-green-700 hover:text-green-600 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                atendimento@locar.srv.br
              </a>
              <span className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                81 2127.2525
              </span>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidadePage;
