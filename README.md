Locar Landing Website

Este projeto é o website institucional da Locar Gestão de Resíduos, desenvolvido com React e Vite, utilizando Tailwind CSS para estilização e React Router DOM para navegação.

Funcionalidades

Página inicial (Landing Page) com várias secções informativas.

Páginas dedicadas para Grupo, Serviços, Socioambiental, Pessoas & Cultura, Contato, Filiais, Sistemas e Comunicados.

Design responsivo adaptado para desktop e mobile.

Transições de página animadas.

Formulário de contato funcional integrado com Formspree.

Listagem dinâmica de comunicados e filiais a partir de ficheiros JSON.

Páginas de erro personalizadas (404).

Pré-requisitos

Certifique-se de que tem o Node.js (versão 18 ou superior recomendada) e o npm instalados na sua máquina.

Instalação

Clone este repositório:

git clone <url-do-seu-repositorio>
cd locar-website


Instale as dependências do projeto:

npm install


Executando Localmente

Para iniciar o servidor de desenvolvimento e visualizar o site no seu navegador:

npm run dev


O site estará disponível, por padrão, em http://localhost:5173. Se o script dev no seu package.json incluir --host, também estará acessível na sua rede local (ex: http://192.168.x.x:5173).

Build para Produção

Para gerar os ficheiros estáticos otimizados para publicação:

npm run build


Este comando criará uma pasta dist (ou build, dependendo da configuração do Vite) na raiz do projeto. O conteúdo desta pasta é o que deve ser carregado para o servidor de hospedagem.

Configuração do Servidor

Este é um Single Page Application (SPA) React que utiliza o React Router DOM para gerir as rotas no lado do cliente. Para que as rotas funcionem corretamente num servidor web, é necessário configurar o servidor para redirecionar todas as solicitações de páginas não encontradas para o index.html principal.

Apache (Ex: cPanel)

Se estiver a hospedar num servidor Apache, crie um ficheiro chamado .htaccess na pasta raiz do seu site (ex: public_html, onde colocou o conteúdo da pasta dist) com o seguinte conteúdo:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>


Vercel

Se estiver a fazer deploy na Vercel, crie um ficheiro vercel.json na raiz do seu projeto com o seguinte conteúdo:

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}


Tecnologias Utilizadas

React

Vite

React Router DOM

Tailwind CSS

Framer Motion

Lucide React (Ícones)

Formspree (Processamento de formulário)
