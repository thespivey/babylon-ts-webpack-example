# Overview
Here's a trivial typescript project that consumes babylonjs.  It uses webpack to bundle all of the code and dependencies into a single js file.

# Usage
```
npm install
npm run build:dev
node ./dist/bundle.js
```

# Details
webpack.config.js defines the input and output
It specifies the use of ts-loader for .ts files, which will in invoke the typescript compiler as needed.