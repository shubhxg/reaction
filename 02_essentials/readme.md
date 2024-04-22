# Essentials

## npm

The default package manager for Node projects. Comes preinstalled with NodeJS. Comes with a CLI used to interact with the online database of NPM. This database is called the `NPM Registry`, and it hosts public and private 'packages.' 

`npm` alternative is `yarn` or `pnpm`

initializing npm: `npm init` command

To skip the initialization steps: `npm init -y`

## What is package.json and why we need it?

`package.json` is a configuration file for any project.
These packages sometimes are called `dependencies`.

NPM manages `versions`, `dependencies`, and `package management`, and it does that using package.json

Always start looking in package.json to know dependencies, version, scripts, eslints etc.

Dependencies can be of 2 types `normal` and `dev (required for development phase)` .

## Bundler

In web development, A bundler does following:

- Combines Files: A bundler takes numerous separate JavaScript files and merges them into a single optimized file.

- Manages Dependencies: Bundlers can track dependencies and ensure everything gets included in the final bundle.

- Optimizes Code: Bundlers can perform various optimizations on your code, such as minification (removing unnecessary characters) and tree-shaking. This further reduces file size and improves performance.

- Popular bundlers like: `Webpack (used in create-react-app)`, `Vite`, `Parcel`.

Installing parcel dependency - `npm install -D parcel`

## Buiding react app using create-react-app

We can use `npx create-react-app` to build our react app but the issue is it's too slow.