// React provides a built-in package called react-dom/server for server-side rendering (SSR) in React. 
// This package contains methods for rendering React components to a string or a stream on the server, 
// which can be sent to the client for faster initial rendering and improved SEO.


// sample code

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');

const appString = ReactDOMServer.renderToString(<App />);
console.log(appString); // "<div class='App'>Hello, World!</div>"

