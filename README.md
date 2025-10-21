This is the [Next.js](https://nextjs.org) rebuild for my homepage, [TheCruzat.com](https://thecruzat.com), completed in September of 2025.

## Goals

I had several goals I wanted to bullseye on this build:

- Next.js build consumes content via WordPress API
- Leverage [TailwindCSS](https://tailwindcss.com) for layout development
- Evolve [the greatest 404 page](https://thecruzat.com/404) in the history of the known internet

## Highlights

- The API feed from the CMS sends the iconic Chicago Star as an SVG -- while not actually included in the codebase, it makes me feel incredibly patriotic
- Nickname for footer and theme image / colors are chosen by random number generators, tho currently the build process is baking those in :\

## Setup

The usual:

`npm i` to install the libraries
`npm run dev` to see the dirigible fly

Personally, I prefer [Yarn](https://yarnpkg.com/), which looks more like `yarn` and `yarn dev`.

If it's running green, kick up [http://localhost:3000](http://localhost:3000) in your browser.

The build is for demonstration purposes only. You'll need to figure out a data source to feed the content area.
