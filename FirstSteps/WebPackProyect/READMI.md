npm install --save-dev webpack -cli webpack-dev-server typescript ts-loader

next step add  webpack.config.js
secondly , remove js extensions imports from proyect, webpack don't need extensions

add entry property to webpack config and oputput

on package.json add 'build' command and remove all js archives

npm run build
npm start

to add plugins 
npm install --save-dev clean-webpack-plugin