# npm Registry

- Find out how to generate a package.json
- Understand the difference between production and dev dependencies
- Grasp? SEMVER
- Package Scripts

a package manager is represented by:

- Web page
- registry
- npm client
- file manifest

npm client package manager which comes with nodejs

### common commands
```
npm help

npm install -h

```
## Init
```
npm init
npm init -y
```
## usage

The default fields in a generated package.json are:

- name – the name of the package
- version – the current version number of the package
- description – a package description, this is used for meta analysis in package registries
- main – the entry-point file to load when the package is loaded
- scripts – namespaced shell scripts, these will be discussed later in this section
- keywords – array of keywords, improves discoverability of a published package
- author – the package author
- license – the package license.

The npm init command can be run again in a folder with an existing package.json and any answers supplied will update the package.json. This can be useful when the package has also been initialized as a git project and has had a remote repo added. When run in a git repository, the npm init -y command will read the repositories remote URI from git and add it to package.json.

Dependencies field is an object, keys are the dependency namespace,and the value the semver range version

a package-lock contains a map of all dependencies with their exact versions.
There is flag in .npmrc package-lock = false/true to change the automatic behaviour on creating package-lock file

npm uses flat strategy, all packages are placed at the top level of node_modules

Dev dependencies : only top level dev dependencies are installed


To install just dependencies without any D dependency

```
npm install --production
```
### Semver
MAJOR.MINOR.PATCH
^ Is the same as MAJOR.X.X
~ the same as MAJOR.MINOR.X

