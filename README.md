# 🤝 Sistema de Apoio ao Voluntário e Comunidade - Frontend (Web)

<div align="center">

<p align="center">
<a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-características-principais">Características</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-stack-tecnológico">Tecnologias</a> •
 <a href="#-pré-requisitos">Pré-requisitos</a> • 
 <a href="#-instalação">Instalação</a> • 
 <a href="#-como-usar">Executar</a> • 
 <a href="#-estrutura-do-projeto">Estrutura</a> • 
 <a href="#-componentes-principais">Componentes</a> • 
 <a href="#-páginas-principais">Páginas</a> • 
 <a href="#-configuração-e-deployment">Deploy</a> •  
 <a href="#equipe-help-code">Equipe</a> • 
 
</p

**Plataforma digital moderna e responsiva para gerenciamento de voluntariado e engajamento comunitário para ONG´s**

[Visitar Site](#) • [Documentação](#-licença) • [Contribuir](#-contribuindo)

</div>

---



## 🎯 Sobre o Projeto

A **ONG Voluntários Pro Bem** é uma organização não governamental dedicada a conectar voluntários com oportunidades de impacto social. Este repositório contém a aplicação frontend, desenvolvida com as mais modernas tecnologias web para proporcionar uma experiência de usuário fluida, intuitiva e acessível.

A plataforma permite que usuários se cadastrem, visualizem eventos, tarefas disponíveis, consultem notícias sobre as atividades da ONG e gerenciem seu perfil de voluntário de forma simples e eficiente.

---

## ✨ Características Principais

- **🏠 Homepage Interativa**: Apresentação visual atrativa com seções animadas e carrossel de conteúdo
- **📝 Sistema de Cadastro**: Formulário intuitivo para registro de novos voluntários
- **🔐 Autenticação**: Sistema de login seguro para acesso à plataforma
- **📅 Gerenciamento de Eventos**: Visualização e inscrição em eventos comunitários
- **✅ Tarefas Voluntárias**: Listagem de tarefas disponíveis com detalhes e status
- **📰 Blog Integrado**: Sistema de notícias com criação e visualização de artigos
- **🎓 Programa de Voluntariado**: Informações detalhadas sobre como se tornar voluntário
- **ℹ️ Página Sobre Nós**: Apresentação da missão e valores da organização
- **💡 Como Ajudar**: Guia completo de formas de contribuição
- **🎨 Design Responsivo**: Interface adaptada para desktop, tablet e mobile
- **⚡ Performance Otimizada**: Carregamento rápido com Vite e React 19
- **🎬 Animações Suaves**: Transições e efeitos visuais com Framer Motion

---


## 🎨 Layout

### Tela de Usuário

![Web1](https://github.com/maridabrins/Nexcent/blob/main/src/assets/images/Thumbnail.png)

### Tela de Admin

![Web1](https://github.com/maridabrins/Nexcent/blob/main/src/assets/images/Thumbnail.png)

### Tela de Voluntários

![Web1](https://github.com/maridabrins/Nexcent/blob/main/src/assets/images/Thumbnail.png)

---

## 🛠 Stack Tecnológico
### Frontend Framework
- **React 19.1.1**: Biblioteca JavaScript para construção de interfaces de usuário
- **Vite 7.1.2**: Build tool moderno e extremamente rápido

### Roteamento e Navegação
- **React Router DOM 7.9.3**: Gerenciamento de rotas e navegação entre páginas

### Animações e Movimento
- **Framer Motion 12.23.22**: Biblioteca de animações declarativas
- **Motion 12.23.22**: Complemento para animações avançadas

### Componentes e Ícones
- **Lucide React 0.544.0**: Biblioteca de ícones SVG modernos e customizáveis
- **React Icons 5.5.0**: Conjunto adicional de ícones populares

### Funcionalidades Específicas
- **React Easy Crop 5.5.3**: Componente para corte e manipulação de imagens
- **Swiper 12.0.2**: Carrossel e slider responsivo

### Ferramentas de Desenvolvimento
- **ESLint 9.33.0**: Linter para manutenção de qualidade de código
- **Babel**: Transpilador JavaScript via Vite
- **TypeScript Types**: Suporte a tipos para React e React DOM

---

## 📦 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js**: Versão 18.0.0 ou superior
  - [Download Node.js](https://nodejs.org/)
  - Verificar instalação: `node --version`

- **npm**: Gerenciador de pacotes (incluído com Node.js)
  - Verificar instalação: `npm --version`

- **Git**: Para controle de versão
  - [Download Git](https://git-scm.com/)

---

## 🚀 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/Gruposemh/front.git
cd projeto-ong/front
```

### 2. Instalar Dependências

```bash
npm install
```

Este comando irá:
- Baixar todas as dependências listadas em `package.json`
- Instalar ferramentas de desenvolvimento
- Criar a pasta `node_modules` com todos os pacotes necessários

### 3. Configuração de Ambiente (Opcional)

Se necessário, crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=ONG Voluntários Pro Bem
```

---

## 💻 Como Usar

### Modo Desenvolvimento

Inicie o servidor de desenvolvimento com Hot Module Replacement (HMR):

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

**Características do modo dev:**
- Recarregamento automático ao salvar arquivos
- Mensagens de erro em tempo real
- Ferramentas de desenvolvimento do navegador

### Build para Produção

Compile a aplicação para produção:

```bash
npm run build
```

Isso gera uma pasta `dist/` otimizada com:
- Código minificado
- Assets comprimidos
- Chunks otimizados para carregamento

### Preview de Produção

Visualize a build de produção localmente:

```bash
npm run preview
```

### Verificação de Qualidade de Código

Execute o linter para verificar a qualidade do código:

```bash
npm run lint
```

Corrigir problemas automaticamente:

```bash
npm run lint -- --fix
```
### Ou Acesse Aqui
- [Sistema de Apoio ao Voluntário e Comunidade](/)


---


## 📁 Estrutura do Projeto

```
projeto-ong/front/
├── src/
│   ├── assets/              # Imagens, logos e recursos estáticos
│   │   └── Logos/          # Logos da ONG
│   ├── components/          # Componentes reutilizáveis
│   │   ├── AnimatedSection/ # Seções com animações
│   │   ├── Button/         # Componente de botão
│   │   ├── Cards/          # Componentes de cards
│   │   ├── Carrossel/      # Carrossel/slider
│   │   ├── ComoAjudar/     # Componentes da página "Como Ajudar"
│   │   ├── Eventos/        # Componentes de eventos
│   │   ├── Footer/         # Rodapé
│   │   ├── Header/         # Cabeçalho/navegação
│   │   ├── Hooks/          # Custom hooks React
│   │   ├── Main/           # Componente principal
│   │   ├── Modais/         # Componentes de modais/diálogos
│   │   ├── PageBlog/       # Componentes do blog
│   │   ├── PageHome/       # Componentes da homepage
│   │   ├── Progress/       # Barra de progresso
│   │   ├── SobreNos/       # Componentes da página "Sobre Nós"
│   │   ├── Tarefas/        # Componentes de tarefas
│   │   └── Title/          # Componente de título
│   ├── contexts/            # Context API para gerenciamento de estado
│   │   └── BlogContext.jsx # Context para gerenciar dados do blog
│   ├── pages/              # Páginas da aplicação
│   │   ├── AdicionarNoticia/
│   │   ├── Blog/
│   │   ├── Cadastro/
│   │   ├── ComoAjudar/
│   │   ├── Eventos/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── PagamentoMensal/
│   │   ├── SobreNos/
│   │   ├── Tarefas/
│   │   └── TornarVoluntario/
│   ├── styles/             # Estilos globais e utilitários
│   ├── App.jsx             # Componente raiz da aplicação
│   ├── App.css             # Estilos do App
│   ├── index.css           # Estilos globais
│   └── main.jsx            # Ponto de entrada da aplicação
├── public/                 # Arquivos públicos estáticos
├── index.html              # HTML principal
├── vite.config.js          # Configuração do Vite
├── eslint.config.js        # Configuração do ESLint
├── package.json            # Dependências e scripts
├── package-lock.json       # Lock file de dependências
└── README.md               # Este arquivo
```

---

## 🧩 Componentes Principais

### Header
Componente de navegação principal com menu responsivo e links para todas as seções da aplicação.

### Footer
Rodapé com informações de contato, links úteis e redes sociais da ONG.

### Cards
Componentes reutilizáveis para exibição de:
- Eventos
- Tarefas
- Notícias
- Voluntários

### Carrossel
Componente Swiper para exibição de conteúdo em formato de slider com navegação e paginação.

### Modais
Componentes de diálogo para:
- Confirmações
- Formulários
- Alertas
- Informações adicionais

### AnimatedSection
Seções com animações Framer Motion para melhor experiência visual.

---

## 📄 Páginas Principais

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial com apresentação da ONG |
| `/eventos` | Eventos | Listagem de eventos comunitários |
| `/cadastrar-se` | Cadastro | Formulário de registro de novos usuários |
| `/como-ajudar` | Como Ajudar | Guia de formas de contribuição |
| `/login` | Login | Página de autenticação |
| `/sobre` | Sobre Nós | Informações sobre a organização |
| `/tarefas` | Tarefas | Listagem de tarefas voluntárias |
| `/voluntario` | Tornar Voluntário | Programa de voluntariado |
| `/quero-ser-voluntario` | Voluntário | Página alternativa de voluntariado |
| `/blog` | Blog | Listagem de notícias e artigos |
| `/blog/noticia/:id` | Notícia Completa | Visualização de artigo individual |
| `/adicionar-noticia` | Adicionar Notícia | Formulário para criar novo artigo |

---

## ⚙ Configuração e Deployment

### Configuração do Vite

O arquivo `vite.config.js` contém a configuração do build:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto para configurar variáveis:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_VERSION=1.0.0
```

Acesse no código com: `import.meta.env.VITE_API_BASE_URL`

### Deploy

#### Vercel

1. Importe o projeto no Vercel
2. Configure automaticamente ou defina:
   - Build Command: `npm run build`
   - Output Directory: `dist`


---


## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir com o projeto:

### Processo de Contribuição

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/Gruposemh/front.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/MinhaFeature`
4. **Faça suas alterações** e teste localmente
5. **Commit** suas mudanças: `git commit -m 'Adiciona MinhaFeature'`
6. **Push** para a branch: `git push origin feature/MinhaFeature`
7. **Abra um Pull Request** descrevendo suas mudanças

### Padrões de Código

- Use **camelCase** para nomes de variáveis e funções
- Use **PascalCase** para componentes React
- Mantenha componentes pequenos e focados
- Adicione comentários para lógica complexa
- Execute `npm run lint` antes de fazer commit

### Reportar Bugs

Abra uma issue descrevendo:
- Comportamento esperado
- Comportamento atual
- Passos para reproduzir
- Screenshots (se aplicável)
- Ambiente (navegador, SO, versão Node)

---



## Equipe Help Code

- [Daniel Gualtieroni](https://github.com/DanieldeOliveiraGualtieroni)
- [Iago Bondesan](https://github.com/Iagob12)
- [Isabella Kawecki](https://github.com/isakawecki)
- [Mariana Dabrins](https://github.com/maridabrins)
- [Thiago Campos](https://github.com/xThgSilva)
 
<div align="center">

---
## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

[⬆ Voltar ao Topo](#-sistema-de-apoio-ao-voluntário-e-comunidade---frontend-web)

</div>
