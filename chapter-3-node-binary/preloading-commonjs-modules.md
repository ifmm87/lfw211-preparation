## Preloading commonjs modules
it is possible load CommonJS modules with -r or --require
```
node --require ./preload.js app.js
preload this script first

preload this script first

hello world from app

another greting from app
```
to load an ESM module use --loader instead, but it is still an experimental feature

