# 🪙 Nikel --- Controle Financeiro Simples

O **Nikel** é um sistema web simples e intuitivo para **controle
financeiro pessoal**, permitindo cadastrar usuários, registrar
lançamentos de **entradas** e **saídas**, visualizar histórico de
transações e acompanhar rapidamente os últimos movimentos.

Este projeto foi construído utilizando apenas **HTML, CSS, JavaScript**
e **Bootstrap**, sem frameworks adicionais --- ideal para estudo de
lógica, manipulação de DOM, organização de arquivos e arquitetura básica
de aplicações front-end.

------------------------------------------------------------------------

## 🚀 Funcionalidades

### 🔐 Usuário

-   Cadastro simples de usuário (armazenado no LocalStorage)

### 💸 Lançamentos Financeiros

-   Registrar **Entradas**
-   Registrar **Saídas**
-   Definir valor, descrição e categoria
-   Dados salvos automaticamente no LocalStorage

### 🏠 Página **Home**

-   Visualização dos **5 últimos lançamentos**
-   Botão para realizar novos lançamentos via modal
-   Layout responsivo usando Bootstrap

### 📄 Página **Transactions**

-   Lista completa de todos os lançamentos
-   Modal para adicionar novos registros
-   Separação clara entre entradas e saídas

------------------------------------------------------------------------

## 🧱 Tecnologias Utilizadas

-   **HTML5**
-   **CSS3**
    -   `/public/css/styles.css`
-   **JavaScript (Vanilla)**
    -   `index.js`, `home.js`, `transactions.js`
-   **Bootstrap 5**
-   **Bootstrap Icons**
-   **LocalStorage**\
    Utilizado para armazenar todos os dados localmente.

------------------------------------------------------------------------

## 📂 Estrutura de Pastas

    public/
    │
    ├── assets/
    │   └── images/         # Logos e ícones do sistema
    │
    ├── css/
    │   └── styles.css      # Estilos customizados
    │
    ├── js/
    │   ├── index.js        # Lógica de login/cadastro
    │   ├── home.js         # Lógica da página Home
    │   └── transactions.js # Lógica da página de Transações
    │
    ├── home.html           # Página inicial
    ├── index.html          # Tela de login/cadastro
    └── transactions.html   # Histórico completo de transações

------------------------------------------------------------------------

## ▶️ Como Rodar o Projeto

1.  Clone o repositório:

``` bash
git clone https://github.com/Josadack/nikel.git
```

2.  Acesse o diretório do projeto:

``` bash
cd nikel/public
```

3.  Abra o arquivo **index.html** no navegador.

Se estiver usando VS Code, você pode usar a extensão **Live Server**
para rodar o projeto localmente.

------------------------------------------------------------------------

## 📌 Armazenamento dos Dados

Todos os dados do sistema são salvos via **LocalStorage**, incluindo:

-   Usuário cadastrado
-   Lista de transações
-   Últimos lançamentos exibidos na Home

Isso permite que o projeto funcione **totalmente offline**.

------------------------------------------------------------------------

## 📅 Possíveis Melhorias Futuras

-   Implementar backend real (Node.js, Java, Python...)
-   Criar sistema de categorias personalizadas
-   Dashboard com gráficos
-   Exportar relatório em PDF/CSV
-   Autenticação JWT
-   Modo dark

------------------------------------------------------------------------

## 👨‍💻 Autor

**Josadack**\
GitHub: https://github.com/Josadack
