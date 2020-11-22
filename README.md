# Habit Tracker

<p align="center">
  <a href="https://v3.vuejs.org/" target="blank"><img src="https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg" width="200" alt="Vue.js Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="250" alt="Nest Logo" /></a>
</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

<p align="center"><i>Project still in progress</i></p>

## Description

Habit Tracker web platform to track your self-development progress.

This is a Proof of Concept in order to try the Nest.js / MongoDB architecture for a future mobile app

## Architecture

### Client : Vue 3
- Full TypeScript Support
- Vue Class Component
- Composition API (for store)
- Axios

### Server : Nest.js
- Full TypeScript Support
- MongoDB Interface
- Json Web Tokens

### Database : MongoDB Cloud

## Configuration

Before starting your application, create a ``.env`` file inside the ``back-end`` folder with the following structure :

```
MONGODB_URI="your mongodb atlas URL"
JWT_SECRET="your jwt secret"
```

## Usage

For the dev environment : 
```sh
cd front-end
npm run serve

cd back-end
npm run start:dev
```

For the production environment : WIP