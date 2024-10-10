---
Desafio Lions

Descrição do Projeto
Uma breve descrição sobre o projeto

> Esse projeto foi desenvolvido para um desafio de front end da empresa lions seminovos, foi um desafio interessante de se desenvolver, me formei em um curso de desenvolvimento web em março/2024, desde então não estava tendo contato com programação, foi um muito bom por tudo que eu aprendi em prática, eu estava me organizando todos os dias das 08:00 as 18:00, eu separei o codigo por pastas cada um pasta tem sua responsabilidade.
---

### Requisitos

Antes de rodar o projeto, você precisa ter instalados:

-   **Node.js** (versão X.X.X ou superior)
-   **npm** ou **yarn** (gerenciador de pacotes)

Verifique se você tem o Node.js instalado executando:

```bash
node -v
```

Se não tiver, instale o Node.js [aqui](https://nodejs.org/).

---

### Instalação

Siga as instruções abaixo para configurar e rodar o projeto localmente.

1. **Clone o repositório** para sua máquina local:

    ```bash
    git clone https://github.com/usuario/repo.git
    ```

2. **Navegue até o diretório do projeto**:

    ```bash
    cd nome-do-projeto
    ```

3. **Instale as dependências**:
   Se estiver usando **npm**:

    ```bash
    npm install
    ```

    Ou, se estiver usando **yarn**:

    ```bash
    yarn install
    ```

---

### Executando o Projeto

Após instalar todas as dependências, execute o seguinte comando para iniciar o projeto em ambiente de desenvolvimento:

Se estiver usando **npm**:

```bash
npm start
```

Ou, se estiver usando **yarn**:

```bash
yarn start
```

O projeto será iniciado e estará disponível em `http://localhost:3000` no navegador.

---

### Estrutura do Projeto

Aqui está uma visão geral dos principais arquivos e diretórios no projeto:

```plaintext
Lions/
│
├── public/                 # Arquivos públicos como index.html
├── src/                    # Contém os arquivos fonte (componentes React, CSS, etc.)
│   ├── Components          # Pasta com todos o componentes que usei
│   ├── image               # Pasta com as imagens
│   ├── pages               # Pasta com a pagina que criei
│   ├── Styles              # Pasta com todos os stilos do projeto
    ├── eslintrc.json       # Lint para deixar o codigo legivel
    ├── App.css             # Arquivo de stilo zerando algumas config inicias.
    ├── App.js              # Componente principal da aplicação
    ├── index.js            # Ponto de entrada da aplicação
├── package.json            # Lista de dependências e scripts
└── README.md               # Instruções do projeto
```

---

### Dicas e Resolução de Problemas

1. **Erro de versão do Node.js**:

    - Se você receber um erro de versão de Node.js, tente atualizar para uma versão compatível. O projeto pode exigir uma versão mais recente.

2. **Problemas de porta em uso**:
    - Se `localhost:3000` já estiver ocupado por outro processo, você pode iniciar o projeto em uma porta diferente executando:
        ```bash
        PORT=3001 npm start
        ```

---

### Tecnologias Utilizadas

-   **React.js**: Biblioteca JavaScript para construir interfaces de usuário.
-   **CSS3**: Para estilização dos componentes.
-   **JavaScript ES6**: Funções e sintaxe modernas de JavaScript.

---

### Autor

> **Gabriel Thiago**  
> [LinkedIn](https://linkedin.com/in/gthiago) | [GitHub](https://github.com/oGabrielDev)

---
