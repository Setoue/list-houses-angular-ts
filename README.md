# 🏡 List Houses Angular (Angular + JSON Server)

Este projeto é uma aplicação **Angular** que exibe uma listagem de casas com opção de filtro.  
Os dados são consumidos via **JSON Server** em `http://localhost:3000/housingLocationData`.

---

## 🚀 Tecnologias Utilizadas

- [Angular 17+](https://angular.io/) - Framework frontend
- [TypeScript](https://www.typescriptlang.org/) - Linguagem principal
- [JSON Server](https://github.com/typicode/json-server) - Mock de API para simulação de dados
- [RxJS](https://rxjs.dev/) - Manipulação reativa de dados
- [Sass/CSS] - Estilização dos componentes

---

## 📦 Estrutura de Pastas

```
src/app
 ├── components/              # Componentes reaproveitáveis
 │   ├── form/                # Formulário de filtros
 │   │   ├── form.component.css
 │   │   ├── form.component.html
 │   │   ├── form.component.spec.ts
 │   │   └── form.component.ts
 │   └── housing-location/    # Card de exibição de casas
 │       ├── housing-location.component.css
 │       ├── housing-location.component.html
 │       └── housing-location.component.ts
 │
 ├── pages/                   # Páginas principais
 │   ├── details/             # Página de detalhes da casa
 │   │   ├── details.component.css
 │   │   ├── details.component.html
 │   │   └── details.component.ts
 │   └── home/                # Página inicial com listagem e filtro
 │       ├── home.component.css
 │       ├── home.component.html
 │       └── home.component.ts
 │
 ├── service/                 # Serviços de consumo da API
 │   ├── housing.service.ts
 │   └── product.service.ts
 │
 ├── types/                   # Tipagens e interfaces
 │   └── housinglocation.ts
 │
 ├── app.component.*          # Componente raiz
 ├── app.config.*             # Configurações globais
 └── app.routes.ts            # Definição de rotas
```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/list-houses-angular-ts.git
cd list-houses-angular-ts
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Suba o JSON Server
Na pasta `data/` existe o arquivo `db.json` (ou equivalente) com os dados de mock.

```bash
npx json-server --watch data/db.json --port 3000
```

A API estará disponível em:  
👉 `http://localhost:3000/housingLocationData`

### 4. Rode a aplicação Angular
```bash
ng serve
```

Acesse no navegador:  
👉 `http://localhost:4200/`

---

## 🎯 Funcionalidades

- Listagem de casas disponíveis
- Filtro dinâmico por nome/cidade/estado
- Página de detalhes de cada casa
- Integração com **JSON Server** simulando uma API REST

---

Feito com 💻 por **Shigeru**
