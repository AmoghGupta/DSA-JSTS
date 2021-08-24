- suppose you wrote some code in TS and now you want to use that code in your client side JS:
 
you can compile the code using typescript compiler i.e tsc with  "module": "es2015",
and "target": "es2015" it will generate the JS in this format for you in dist folder.
then you can use those JS files with your own JS files.





- suppose you wrote some code in TS and now you want to use that code in your Node JS:
 
you can compile the code using typescript compiler i.e tsc with  "module": "commonjs",
and "target": "es2015" it will generate the JS in this format for you in dist folder.
then you can use those JS files with your own NODE js files by requiring them.