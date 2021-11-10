npm init
tsc --init  #after config file
    #add src folder
    #restart IDE  if tsconfig file show erros

npm install --save express body-parser
npm install --save-dev nodemon
npm install --save-dev @types/node
npm install --save-dev @types/express  

tsc -w


add "start": "nodemon dist/app.js" from pacakge.json
npm start