Locar Website Institucional

Descrição Geral

Este repositório contém o código-fonte do website institucional da Locar Gestão de Resíduos. O projeto foi desenvolvido utilizando React com Vite como ferramenta de build, estilizado com Tailwind CSS e Framer Motion para animações. A navegação é gerida pelo React Router DOM, criando uma experiência de Single Page Application (SPA) fluida.

O website serve como a principal presença online da Locar, apresentando a empresa, seus serviços, valores, notícias e informações de contato de forma clara e profissional.

Funcionalidades Principais

Página Inicial Abrangente: Apresenta um resumo visual e informativo da empresa, incluindo:

Secção Hero com proposta de valor.

Apresentação das empresas do Grupo Locar (com modal interativo).

Visão geral dos Serviços (com sistema de abas interativo).

Secção dedicada ao Compromisso Socioambiental (com imagens e estatísticas).

Chamada para Carreiras ("Faça Parte do Nosso Time").

Resumo dos últimos Comunicados.

Secção de resumo das Filiais (visível em todas as páginas).

Páginas Dedicadas:

/grupo: Detalhes sobre a história, estrutura e empresas do Grupo Locar.

/servicos: Descrição aprofundada de cada serviço oferecido.

/meio-ambiente: Informações sobre as práticas sustentáveis e responsabilidade social.

/pessoas-cultura: Foco na equipa, ambiente de trabalho e oportunidades de carreira.

/contato: Formulário de contato funcional (integrado com Formspree) e mapa.

/filiais: Lista completa de todas as unidades da Locar.

/sistemas: Links de acesso às plataformas internas (GirosPlus, Universidade Corporativa).

/comunicados: Arquivo completo de todos os comunicados internos.

Design Responsivo: Adaptado para uma visualização otimizada em desktops, tablets e smartphones.

Animações e Transições: Utilização do Framer Motion para transições suaves entre páginas e animações subtis em elementos da interface.

Conteúdo Dinâmico: Carregamento de dados para Comunicados e Filiais a partir de ficheiros JSON estáticos na pasta public.

Páginas de Erro: Página 404 personalizada para URLs não encontradas e um Error Boundary para capturar erros inesperados na aplicação.

Estrutura do Projeto

/public             # Ficheiros estáticos (imagens, JSONs, index.html)
/src
  /components       # Componentes reutilizáveis
    /landing        # Secções específicas da página inicial
    /layout         # Componentes do layout principal (Navbar, Footer, etc.)
    ErrorBoundary.jsx
  /pages            # Componentes de página (rotas principais)
  App.jsx           # Configuração das rotas principais
  index.css         # Estilos globais e configuração do Tailwind
  main.jsx          # Ponto de entrada da aplicação React
...                 # Outros ficheiros de configuração (vite.config.js, etc.)


Pré-requisitos

Node.js (v18 ou superior recomendado)

npm (geralmente instalado com o Node.js)

Instalação

Clone o repositório para a sua máquina local:

git clone <url-do-seu-repositorio>
cd locar-website


Instale as dependências necessárias:

npm install


Execução em Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento Vite e visualizar o site:

npm run dev


O site estará acessível em http://localhost:5173 por padrão. Se o script dev incluir a flag --host (como em "dev": "vite --host" no package.json), ele também estará disponível na sua rede local.

Geração do Build para Produção

Para compilar e otimizar o site para publicação:

npm run build


Este comando gera a pasta dist (configuração padrão do Vite) na raiz do projeto. Esta pasta contém todos os ficheiros estáticos (index.html, CSS, JavaScript, imagens, etc.) necessários para o deploy.

Deploy (Publicação)

Carregue o Conteúdo: Envie apenas o conteúdo da pasta dist gerada no passo anterior para a pasta raiz do seu servidor de hospedagem (ex: public_html num cPanel).

Configure o Servidor para SPAs: Como este é um Single Page Application, o servidor precisa ser configurado para redirecionar todas as solicitações de rotas (que não sejam ficheiros estáticos existentes) para o index.html.

Apache (ex: cPanel): Crie um ficheiro .htaccess na pasta raiz (public_html) com o seguinte conteúdo:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>


Vercel: Crie um ficheiro vercel.json na raiz do projeto (antes do build) com o seguinte conteúdo:

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}


(A Vercel geralmente deteta frameworks React/Vite e aplica esta regra automaticamente, mas ter o ficheiro garante o comportamento).

Tecnologias Utilizadas

Framework/Library: React 18

Build Tool: Vite

Roteamento: React Router DOM v6

Estilização: Tailwind CSS v3

Animações: Framer Motion

Ícones: Lucide React

Formulários: Integração com Formspree

Contribuição

Contribuições são bem-vindas. Por favor, siga as diretrizes padrão de fork e pull request.

Licença

(Opcional: Adicione aqui a licença do seu projeto, ex: MIT License)
