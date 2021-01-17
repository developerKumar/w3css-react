# URL to access docs

https://developerkumar.github.io/w3css-react

# Tech stack:

## Tasks Done

Build: Rollup [Done]  
Typescript [Done]  
React [Done]  
lerna : Monorepo [Done]  
Deployment: gh-pages [Done]

## Next Tasks Todo [setup]

Styling: styled-components  
Prettify: prettier  
Linter: tslint, eslint  
Testing: Jest, React-testing library, sinon  
deduplicate-yarn  
commitizen
husky

# How to add a new package

1. lerna create @devk/package-name
2. Add build command to scripts in package.json inside the created package as follows: `"build": "w3css-builder"`
3. Add created package to main package as follows: `lerna add @devk/package-name --scope=@devk/w3css`
4. After step 3, Create a import inside w3css.ts file and export the imported package

# Some important commands example to link packages during project setup

### Add w3css-text dependency into w3cc

`lerna add @devk/w3css-text --scope=@devk/w3css`

### We are going to use React for the two UI components, let's add it as dev dependency first for local testing

`lerna add react --dev --scope=@devk/w3css-text`

`lerna add react-dom --dev --scope=@devk/w3css-text`

###` And as a peer dependency using major 16 version for consuming applications

`lerna add react@17.x --peer --scope=@devk/w3css-text`
