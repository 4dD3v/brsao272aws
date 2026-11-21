# Simulado Unificado (BRSAO272AWS) - baseado em https://github.com/rafasantosbzr/Banco-de-Questoes-CLF-C02

Aplicação web full-stack desenvolvida para a realização de simulados interativos e gerenciamento de salas/questões em tempo real.

🔗 **Acesse o projeto online:** [https://brsao272aws.onrender.com](https://brsao272aws.onrender.com)

> **Nota de hospedagem:** Como este projeto está hospedado no plano gratuito do Render, o servidor entra em modo de hibernação após 15 minutos de inatividade. O primeiro acesso após esse período pode levar cerca de **30 a 50 segundos** para carregar enquanto o serviço é inicializado.

---

## Funcionalidades

- **Ambiente de Simulado:** Interface responsiva para resolução de questões e acompanhamento de desempenho.
- **Painel Administrativo:** Criação e gerenciamento dinâmico de salas e perguntas via API REST (`/api/admin/rooms`).
- **Atualização Contínua (CI/CD):** Deploy automatizado integrado diretamente ao GitHub via Render.

---

## Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3, JavaScript (Vanilla)
- **Back-end:** Node.js
- **Hospedagem e Versionamento:** GitHub & Render

---

## Estrutura do Projeto

```text
brsao272aws/
└── simulado-unificado/
    ├── public/          # Arquivos estáticos do front-end (index.html, style.css, app.js, admin.js)
    ├── package.json     # Dependências e scripts de inicialização
    └── server.js        # Servidor Node.js e rotas da API
