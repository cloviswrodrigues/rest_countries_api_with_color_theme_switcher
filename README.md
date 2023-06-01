# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### Screenshot

#### Mobile
![](./solution/design_mobile.gif)

#### Desktop
![](./solution/design_desktop.gif)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/en/main) - JS library
- [Prop Types](https://www.npmjs.com/package/prop-types) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- Utilizado theming do styled components para mudar as cores para light ou dark mode
  - salvo no localstorage o theme escolhido
- Aplicado Skeleton Screen para melhoria na experiência do usuário no carregamento das imagens
- Criado Hook useLocalStorage para salvar e pegar valores no Local Storage
- Criado a camada Service para buscar os dados dos países no arquivo data.json
- Utilizado Eslint para padronização do codigo fonte

