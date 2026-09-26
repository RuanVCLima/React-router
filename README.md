# React Router

Projeto desenvolvido para praticar e explorar o funcionamento do **React Router** em uma aplicação React com TypeScript.

Durante o desenvolvimento, foram trabalhados conceitos como criação de rotas, navegação entre páginas, rotas dinâmicas, layouts e tratamento de páginas não encontradas.

## 🚀 Tecnologias

- React 19
- TypeScript
- React Router 8
- Vite
- ESLint
- Prettier
- CSS

## 📚 Conceitos estudados

- Configuração de rotas com React Router
- Navegação entre páginas
- Rotas aninhadas
- Layout compartilhado
- Rotas dinâmicas
- Parâmetros de URL
- Página 404
- Organização de páginas e componentes
- Estilização com CSS

## 🛣️ Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Página inicial |
| `/products` | Products | Página de produtos |
| `/details/:id` | Details | Página de detalhes utilizando um ID dinâmico |
| `*` | NotFound | Página exibida quando a rota não existe |

A aplicação utiliza um `Layout` como estrutura compartilhada para as páginas principais. :contentReference[oaicite:2]{index=2}

## 🎨 Estilização

O projeto utiliza CSS para definir o layout, navegação, links, botões e cards.

A interface possui um tema escuro, com destaque em tons de laranja e azul. :contentReference[oaicite:3]{index=3}

Os links também foram personalizados para remover o sublinhado padrão e utilizar uma cor de destaque. :contentReference[oaicite:4]{index=4}

## 📁 Estrutura do projeto

```text
src/
├── components/
│   └── Layouts/
│
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── Detail.tsx
│   └── NotFound.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── main.tsx
└── main.css
```

⚙️ Como executar o projeto

1. Clone o repositório

 ```bash
 git clone <URL_DO_REPOSITORIO>
 ```

2. Acesse a pasta

```bash
cd react-router
```

3. Instale as dependências

```bash
npm install
```
4. Execute o projeto

```bash
npm run dev
```

O Vite disponibilizará a aplicação no endereço informado no terminal.

🏗️ Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a build:

```bash
Para visualizar a build:
```

🔍 Lint

Para verificar problemas no código:

```bash
npm run lint
```

📦 Dependências principais

React       19.2.8
React DOM   19.2.8
React Router 8.4.0
TypeScript  6.0.2
Vite        8.3.0

🎯 Objetivo

Este projeto faz parte dos meus estudos de React e tem como objetivo consolidar os fundamentos de roteamento e navegação em aplicações React utilizando React Router.

👨‍💻 Autor

Ruan Victor

GitHub: RuanVCLima

