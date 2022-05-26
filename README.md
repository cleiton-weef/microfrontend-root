# Microfrontend Root

> Aplicação responsável pela orquestração de microfrontends


## Descrição

Prova de Conceito (POC) usando o framework [single-spa](https://single-spa.js.org/) para gestão de microfrontends.

A aplicação _root_ é responsável por entender onde estão os _microfrontends_ que serão executados, e quando eles serão executados.

Dentro da aplicação root, cada _microfrontend_ recebe um nome. O mapeamento dos microfrontends e seus respectivos nomes é feito no arquivo `src/index.ejs`, na tag `<script type="systemjs-importmap">`.

A a exibição dos microfrontends é baseada nas rotas da aplicação. As configurações de rota para cada microfrontend pode ser consultada no arquivo `src/layout.html`.


## Pré requisitos para execução

Antes de executar o projeto root, é necessário que os demais microfrontends estejam em execução.

Clone e execute os projetos a seguir:

  - [microfrontend-react-appbar](https://github.com/cleiton-weef/microfrontend-react-appbar)
  - [ microfrontend-monolith](https://github.com/cleiton-weef/microfrontend-monolith)


## Instale as dependências do projeto

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

## Execute o projeto

Execute o comando abaixo para iniciar o projeto:

```bash
npm start
```