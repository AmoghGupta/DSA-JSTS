// There's also one all-important flag in this package.json: 
// You have to declare where to find the type declarations! 
// This is done using "types": "dist/index.d.ts" Otherwise the consumer won't find your module!

// The final property "files" helps you to whitelist the files you want to ship to the npm registry. 
// This is usually a much easier and safer route than using the `.npmignore` file!  

// npm username is amoghgupta and pwd is  RESET YOUR PASSWORD

// 1. RUN command= tsc  (it will generate dist folder and convert your typescript to JS files (along with your type declarations as well)
// 2. npm login
// 3. npm publish
// 4. now use it in your app i.e your consumer
// 5. npm install -g hwrldamogh
// 6. import {sayHello} from 'hwrldamogh/dist/hello-world';
// 7. refer to consumerApp   