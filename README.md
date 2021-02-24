# Google HashCode 2021

We participate to the coding challenge with SFEIR colleagues.

## Prerequisite

* Install node LTS
* Run `npm i` at the root of the project to install dependences
* Get your inputs ready in the `inputs` folder

## Quickstart

### You want a quick result :

```bash
npm start
```

### You want to develop your solution :

```bash
npm run dev
```

## Development Informations

We are using `tsup` to generate a javascript file from a typescript source at a lightning speed.

We have `eslint` to enforce code style based on the standard norm.

We can find a `.env` file to help on targeting inputs and the possibility to be in a debug mode which avoid to write solutions in their output files.

You can choose for the `INPUTS` env variable to be `all`. That will retrieve every files in the `inputs` folder which ends with `.in`.

Or you can specify the file names you want to target as `a,c` or `b,a,c`, whatever.

Here is the flow of the application :

* Read inputs files based on the `.env` file
* Do for every files :
  * Parse inputs
  * Resolve based on the data parsed
  * Write the solution in an output file in the `outputs` folder