# Essentials

## npm

The default package manager for Node projects. Comes preinstalled with NodeJS. Comes with a CLI used to interact with the online database of NPM. This database is called the `NPM Registry`, and it hosts public and private 'packages.' 

`npm` alternative is `yarn` or `pnpm`

initializing npm: `npm init` command

To skip the initialization steps: `npm init -y`

## What is package.json, package.lock.json?

### package.json
`package.json` is a configuration file for any project.
These packages sometimes are called `dependencies`.

npm manages `versions`, `dependencies`, and `package management`, and it does that using package.json

Always start looking in package.json to know dependencies, version, scripts, eslints, etc.

Dependencies can be of 2 types `normal` and `dev (required for development phase)`. Dev dependencies are installed by using the following command of npm: `npm install -D {dependencyName}`

`npm install` to install all the dependencies mentioned in the the package.json

### package.lock.json
`package.lock.json` is the file that keeps track of exact versions of all the dependencies that are being installed including sub-dependencies. 

It is generated when a depndency is installed.

It creates a canonical representation of the dependency tree, allowing npm to process it more quickly and consistently. 

It makes the behavior of installing dependencies more predictable across different machines, by ensuring that the same tree is installed everywhere.

`package-lock.json` ensures that the actual versions installed match exactly what was installed previously and will install the same way on any machine.

### integrity hash in package.lock.json
This integrity hash is a checksum generated based on the specific version of the package and its dependencies at the time of installation. If any of the package's files change or if the dependency tree changes, the integrity string will also change, alerting the package manager to potential inconsistencies or tampering.

This ensures that when someone else installs the same package, they get exactly the same code.

## Versioning of Dependencies
`x.y.z` where `z` is patch fix, `y` is minor changes and `x` is major update.
`^` means you can update your package upto less than x version.
> for example: `^1.2.3`, it means any version more than 1.2.3 but should be less than 2.0.0 is supported. It's always suggested to keep carat sign

## .gitignore file
Git will ignore the files mentioned inside this file.
You should always put node_modules in the gitginore file

## Bundler

In web development, A bundler does following:

- `Combines Files`: A bundler takes numerous separate JavaScript files and merges them into a single optimized file.

- `Manages Dependencies`: Bundlers can track dependencies and ensure everything gets included in the final bundle.

- `Optimizes Code`: Bundlers can perform various optimizations on your code, such as minification (removing unnecessary characters) and tree-shaking. This further reduces file size and improves performance.

- `Popular bundlers like`: `Webpack (used in create-react-app)`, `Vite`, `Parcel`.

Installing parcel dependency - `npm install -D parcel`

## Buiding react app using create-react-app

We can use `npx create-react-app` to build our react app but the issue is it's too slow.

## Building using parcel

`npx parcel index.html` where `npx` is `node package executer` is used to run/build package.

Parcel is doing following for us:
- local server
- dev build
- hmr (hot module replacement)
- Uses file watching algorithm 

## Installing react and react-dom as dependency
`npm install react react-dom` or `npm i react react-dom` both are same