# PWA Preact
A minimalistic PWA boilerplate based on Webpack 3, Preact and Typescript with performance in mind.

[https://pmcalabrese.github.io/pwa-preact/](https://pmcalabrese.github.io/pwa-preact/)

Features:
-   Preact
-   Typescript
-   Webpack + Webpack dev server (prod and dev setup)
-   Service Worker with Workbox
-   Very high Lighthouse score
-   manifest.json file
-   Code splitting
-   Support for SCSS
-   Critical CSS
-   Web installed app ready
-   Gzip on compilation

## Install
Install the dependencies

    npm i

## Compile and watch
Start webpack in development mode

    npm start

## Develop
Start webpack dev server in development mode

    npm run start:dev

## Build
Build for production

    npm run build

## Build and serve with http-server
Build for production and serve on port 8080

    npm run build-serve

 ## Just serve with http-server on port 8080
Build for production

    npm run serve

the folder served is `public`.