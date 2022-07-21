## Architecture

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and based on [Next.js](https://nextjs.org/) &mdash; The [React](https://reactjs.org/) Framework for Production, [TypeScript](https://www.typescriptlang.org/) &mdash; Strongly typed programming language which builds on [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) giving you better tooling at any scale, [SASS](https://sass-lang.com/) &mdash; The most mature, stable, and powerful professional grade [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) extension language in the world.

## Notable dependencies

- [`papaparse`](https://www.papaparse.com/)&mdash; The fastest JavaScript CSV parser for the browser.
- [`react-toastify`](https://github.com/fkhadra/react-toastify) &mdash; Allows you to add notifications to your app with ease.
- [`classnames`](https://github.com/JedWatson/classnames) &mdash; A simple JavaScript utility for conditionally joining classNames together.

## Folders

- `/components` &mdash; All the components.
  - `/shared` &mdash; Components not related to the specific page or type.
- `/pages` &mdash; All the application routes.
- `/hooks` &mdash; All the shared hooks.
- `/shared`
  - `/types` &mdash; Common Typescript types.
  - `/utils` &mdash; Utils functions for Papaparse and others.
- `/public` &mdash; All the public files.
- `/styles` &mdash; All the global styles.

## Getting Started

Install de dependencies
```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Observations 

- Having no restrictions, app was boostraped from Nextjs and not from Create React App.
- Image was not uploaded as byte64 to localstorage. It would have freeze the browser. If I understood bad the requirment, sorry fot that. 
- Some Typescript type check was not finished.
