### modules

#### Objectives
By the end of this chapter, you should be able to:

- Learn how to load modules.
- Discover how to create modules.
- Understand the interoperability challenges between ESM and CJS.
- Lookup a modules file path.
- Detect whether a module is the entry point of an application.


The require function is passed a package's namespace, looks for a directory with that name in the node_modules folder and returns the exported value from the main file of that package.
EcmaScript Modules (ESM) was introduced to the EcmaScript specification as part of EcmaScript 2015 (formerly known as EcmaScript 6). One of the main goals of the specification was for module includes to be statically analyzable, which allows browsers to pre-parse out imports similar to collecting any <script> tags as the web page loads.

Due to the complexity involved with retrofitting a static module system into a dynamic language, it took about three years for major browsers to implement it. It took even longer for ESM to be implemented in Node.js, since interoperability with the Node's existing CJS module system has been a significant challenge - and there are still pain points as we will see.

A crucial difference between CJS and ESM is that CJS loads every module synchronously and ESM loads every module asynchronously (again, this shows the specification choices for the native JavaScript module system to work well in browsers, acting like a script tag).

It's important to differentiate between ESM and what we'll call "faux-ESM". Faux-ESM is ESM-like syntax that would typically be transpiled with Babel. The syntax looks similar or even identical, but the behavior can vary significantly. Faux-ESM in Node compiles to CommonJS, and in the browser compiles to using a bundled synchronous loader. Either way faux-ESM loads modules synchronously whereas native ESM loads modules asynchronously.

In a future section, we'll look at converting a whole project to ESM, which allows us to use .js extensions for ESM files (CJS files then must have the .cjs extension). For now, we're just converting a single CJS file to an ESM file.

Whereas CJS modifies a module.exports object, ESM introduces native syntax. To create a named export, we just use the export keyword in front of an assignment (or function declaration). Let's update the format.mjs code to the following:

export const upper = (str) => {
  if (typeof str === 'symbol') str = str.toString()
  str += ''
  return str.toUpperCase()
}

We no longer need the 'use strict' pragma since ESM modules essentially execute in strict-mode anyway.


Converting a CJS Package to an ESM Package (2)
Whereas in CJS, we assigned a function to module.exports, in ESM we use the export default keyword and follow with a function expression to set a function as the main export. The default exported function is synchronous again, as it should be. In the CJS module we assign to module.exports in an else branch. Since CJS is implemented in JavaScript, it's dynamic and therefore this is without issue. However, ESM exports must be statically analyzable and this means they can't be conditionally declared. The export keyword only works at the top level.

EcmaScript Modules were primarily specified for browsers, this introduced some new challenges in Node.js. There is no concept of a main module in the spec, since modules are initially loaded via HTML, which could allow for multiple script tags. We can however infer that a module is the first module executed by Node by comparing process.argv[1] (which contains the execution path of the entry file) with import.meta.url.

Since ESM was primarily made with browsers in mind, there is no concept of a filesystem or even namespaces in the original ESM specification. In fact, the use of namespaces or file paths when using Node with ESM is due to the Node.js implementation of ESM modules, and not actually part of the specification. But the original ESM specification deals only with URLs, as a result import.meta.url holds a file:// URL pointing to the file path of the current module. On a side note, in browsers import maps can be used to map namespaces and file paths to URLs.

We can use the fileURLToPath utility function from the Node core url module to convert import.meta.url to a straightforward path, so that we can compare it with the path held in process.argv[1]. We also defensively use realpath to normalize both URLs to allow for scenarios where symlinks are used.

The realpath function we use is from the core fs/promises module. This is an asynchronous filesystem API that uses promises instead of callbacks. One compelling feature of modern ESM is Top-Level Await (TLA). Since all ESM modules load asynchronously it's possible to perform related asynchronous operations as part of a module's initialization. TLA allows the use of the await keyword in an ESM modules scope, at the top level, as well as within async functions. We use TLA to await the promise returned by each realpath call, and the promise returned by the dynamic import inside the if statement.

Regarding the dynamic import, notice that we had to reassign the default property to pino. Static imports will assign the default export to a defined name. For instance, the import url from 'url' statement causes the default export of the url module to be assigned to the url reference. However dynamic imports return a promise which resolves to an object, if there's a default export the default property of that object will be set to it.

Another static import statement is import { realpath } from 'fs/promises'. This syntax allows us to pull out a specific named export from a module into a reference by the same name (in this case, realpath). To import our format.js we use import * as format from './format.js'. Note that we use the full filename, ESM does not support loading modules without the full extension. This means loading an index.js file via its directory name is also not supported in ESM. The format.js file only has the named upper export, there is no default export. Attempting to use import format from './format.js' would result in a SyntaxError about how format.js does not have a default export. We could have used the syntax we used to import the realpath function (e.g. import { upper } from './format.js') but since the code is already using format.upper(...) we can instead use import * as to load all named exports into an object named format. Similar to how dynamic import works, if a module has a default export and import * as is used to load it, the resulting object will have a default property holding the default export.

For more information on EcmaScript modules see "JavaScript Modules" and Node.js Documentation.

