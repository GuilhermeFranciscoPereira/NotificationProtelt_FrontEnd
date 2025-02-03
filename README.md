# <img src="./src/assets/imagensForTheSite/RumoLogo.png" width="50" /> Sistema de notificações - Protelt <img src="./src/assets/imagensForTheSite/RumoLogo.png" width="50" />

## 📌 Sobre o sistema

### Este sistema foi desenvolvido para facilitar a criação das notificação de autuação por infração de velocidade máxima permitida, sistema desenvolvido para a empresa Protelt em Itu/SP.

## 🧠 Critérios pontuados para o sistema
- ✔️ Ser simples, rápido e útil.
- ✔️ Deve ter as opções de:
        - Visualizar todas as notificações.
        - Buscar todas as infrações de uma certa placa.
        - Criar novas infrações.
        - Editar / Deletar infrações.
- ✔️ Na sua primeira versão deve rodar somente para um único usuário.
- ✔️ O sistema deve ficar no servidor da empresa.

## 🎯 Objetivos principais com esse sistema
- ✔️ Reduzir o tempo gasto na criação de notificações.
- ✔️ Melhorar a organização e rastreamento de infrações.
- ✔️ Tornar o processo mais eficiente e menos propenso a erros.

#

## 🖥 Tecnologias Utilizadas
<div align='center'>

!['NextJSLogo'](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
!['ReactLogo'](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
!['TypescriptLogo'](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
!['CssLogo'](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

    - Next
    - React
        - tanstack/react-query
        - tanstack/react-query
        - react-hook-form
        - react-query
        - zod
    - Typescript
    - Css Modules

## Versões utilizadas:
    - Next: 15.1.5
    - React: 19.0.0
        - tanstack/react-query: 5.64.1
        - react-hook-form: 7.54.2
        - react-query: 3.39.3
        - zod: 3.24.1
    - Typescript: 5

## 🙋🏻‍♂ Como me localizar no projeto?

### Todos os arquivos de código fonte do projeto estão em: `./src`

## 🛈 Como o projeto está estruturado

- `./public/uploads:` Local onde fica as fotos das infrações

- `./src/app:` Este projeto é em Next e usando o App Router, então cada pasta é uma rota. Dentro do app temos: 
  - layout.tsx: Importa estilos globais, configura metadados (como título e descrição), e encapsula a aplicação.
  - page.tsx: Nossa primeira rota, também chamado como o nosso "home".
  - favicon.ico: Favicon do site.
  - Pasta (pages) que armazena nossas rotas:
    - /infracoes ( Armazena todas as infrações de maneira "reduzida" )
    - /infracaocompleta/[id] ( Local onde fica disponível todos os detalhes da infração que o usuário deseja buscar )

- `./src/assets:` Onde está todas as fotos e arquivos estáticos que vão ser usadas no projeto.

- `./src/components:` Onde está os componentes que serão reutilizados em diversas partes do código. Neste projeto temos os components:
    - Buttons:
        - ButtonSection: Agrega os três botões da tela inicial
        - ButtonStructure: "Esqueleto" de cada  botão
        - EditAndDelete: Botões que são da parte de "Editar / Deletar"
    - Filters:
        - SearchByPlate: Componente que fica responsável pelo campo de input da opção de buscar por uma placa.
        - SearchBySpeedRange: Componente responsável por buscar por velocidade
    - Footer: Rodapé, se localiza na tela inicial do sistema
    - Form: Formulário para criação de novas infrações, acionado após clicar no botão de "Criar uma nova infração"
        - UpdateFields: Onde fica a parte para atualizar uma infração
    - Header: Cabeçalho que se encontra no canto superior do sistema e aparece na tela principal e na de mostrar as infrações de forma reduzida
    - Modal: Esqueleto do modal, criado esse componente para fazer um modal que seja reutilizado de diversas formas
    - Toast: Componente do toast ( Aquela informação que aparece de sucesso ou erro no canto inferior direito quando realiza alguma ação )

- `./src/contexts:` Os contexts são onde separamos os dados e funções que serão compartilhados com toda a aplicação, neste projeto é onde está os contextos de:
    - EditAndDeleteContext
    - FiltersContext
    - ModalContext
    - SearchByIdContext
    - ToastContext
    - Vale ressaltar que o arquivo 'AppProvider.tsx' é o responsável por agrupar todos os providers dos contextos e exportar como um arquivo único. 

- `./src/hooks:` Está nossos hooks personalizados com as partes lógicas de todos os nossos componentes:
    - Apis:
        - Filters
            - useGetByPlate
            - useGetBySpeedRange
        - useDeleteInfringement
        - useGetAllInfringement
        - useGetById
        - usePostForm
        - useUpdateInfringement
    - Buttons:
        - useButtonsHooks
        - useEditAndDelete
    - Pages:
        - useInfracaoCompletaHooks

- `./src/services:` Pasta que contém as funcionalidades de serviço. Temos um único arquivo chamado "QueryClient.ts" que serve somente para criarmos um QueryClient e exportar o provider neste próprio arquivo, uma vez que assim podemos usar a diretiva 'use client' no arquivo e não no layout da aplicação.

- `./src/styles:` Pasta que contém os arquivos de estilização. Nesta primeira versão temos também um único arquivo, chamado "GlobalStyles.css", este arquivo fica responsável pelos códigos que são de estilização globais do projeto.

## ❔ Como rodar o projeto na minha máquina?

- Antes de tudo, você precisa ter o Git instalado no seu computador. O Git é uma ferramenta que permite clonar e gerenciar repositórios de código.
    - Windows: Baixe o Git <a href="https://git-scm.com/download/win" target="_blank">aqui</a> e siga as instruções de instalação.
    - macOS: Você pode instalar o Git <a href="https://git-scm.com/download/mac" target="_blank">aqui</a> ou usando o Homebrew com o comando brew install git:
        ```bash
        brew install git
        ```
        
    - Linux: Use o gerenciador de pacotes da sua distribuição, por exemplo para Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```
        

- Abra o terminal (no Windows, você pode usar o Git Bash, que é instalado junto com o Git).

- Navegue até o diretório onde deseja armazenar o projeto.

- Execute o comando para clonar o repositório:

    ```bash
    git clone https://github.com/GuilhermeFranciscoPereira/NotificationProtelt_FrontEnd.git
    ```
    
- Após clonar o repositório, navegue até a pasta do projeto
    ```bash
    cd NotificationProtelt_FrontEnd
    ```
    

- Agora você pode abrir os arquivos do projeto com seu editor de texto ou IDE preferido. Exemplo do vsCode: 
    ```bash
    code .
    ```

- 🚨 Não esqueça que para não ocorrer erros no código ao clonar ele, você deve fazer o comando abaixo 🚨
    ```bash
    npm i --force
    ```
    - O force é devido a utilização de bibliotecas com versões que não possuem suporte a versão atual do react utilizado.
    
- Ao ter o projeto na sua máquina você deve abrir a api e também o site. Para isso siga os passos abaixo:
  - Abra o terminal e escreva o código abaixo para iniciar a api:
    - 1:
      ```bash
      cd src/api
        ```
      
    - 2:
        ```bash
        npm start
        ```
      
  - Para abrir o site rode o comando:
    ```bash
    npm run dev
    ```
    

- Pronto! Todo o site estará funcionado na sua máquina. Porém, caso precise de alguma ajuda em algo entre em contato comigo pelo meu LinkedIn: https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283

##

## 🎉 É isso! Esse é o nosso sistema, caso tenha ficado com alguma dúvida ou deseje complementar algo diretamente comigo você pode estar entrando em contato através do meu LinkedIn:
> Link do meu LinkedIn: <a href="https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283" target="_blank">https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283</a>

### 🚀 Obrigado pela atenção e espero que tenha gostado do que tenha visto aqui, que tal agora dar uma olhada nos meus outros repositórios? 👋🏻

#

### ❤️ Créditos:

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

- #### Créditos dos badges: 
> <a href="https://shields.io" target="_blank">https://shields.io</a>