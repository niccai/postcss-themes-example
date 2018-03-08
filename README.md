# postcss-themes-example

A simple example of how to produce multiple, themed CSS stylesheets for a project. The goal is to produce multiple stylesheets for the same site or stylesheets for multiple sites that share much of the same code (branded sites with different content focus).

# Getting Started

Clone or download the repo and run the following two commands:

`npm install`

then

`npm build:css`

These commands will install postcss and the plugins needed for this example, and then build two themed css files as output. You can access the output at the following location:

`\static\css`

## Caveats

* this example only requires two postcss plugins: `postcss-import`, and `postcss-simple-vars`
* `postcss-simple-vars` is used to keep the illustration simple and be more familiar to Sass users
* `cssnano` is also used in the final ouput simply to remove comments and illustrate more of a production-like scenario

## How it works

1. Each theme placeholder file in `/css/themes` imports `index.css` (and what should be your site's main list of imports).
2. Common variables and theme variables from the `/css/src` js files are merged together in the `postcss.config.js` before being used. Each CSS theme's file name from step one is used as the key to select the proper set of theme variables.
3. Postcss does its magic and outputs the results to `/static/css`.
