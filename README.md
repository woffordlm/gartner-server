<h1 align="center">Stock Portfolio Server</h1>

<p align="left">This project performs the server side logic for the gartner-demo project(UI). </p>


## Authors
- [Luke Wofford](https://github.com/woffordlm)

## Deployment

- [Github](https://github.com/woffordlm/gartnerDemo)

## Installation

1. install npm packages
2. Create an account with alphavantage.co and get a free api key. 
3. Create a .env file in your main directory and store witin it your API_KEY
4. To run the server, run the command: npm start
5. Open up the gartner-demo project and type npm start into the command line.

- [Github/demo](https://github.com/woffordlm/gartnerDemo)

## Explanation of this application's logic

<h3>Server Logic </h3>
1. The server.js file acts as the starting point for our logic.
2. First we import all of the packages and paths that we will use in the server. 
3. Then we assign a port value to the const PORT variable. If the process.env.PORT exists that would used instead of 3001.
4. We then instantiate the server by assigning express() to a the app varaible. This allows us to chain on methods to the express server.
5. We then utilize the use method to attach middleware to the server. In this case we are using it to create routes. 
6. We then use the listen method to to tell our server to listen at the specified port number. 

<h3>Routing & Endpoint Logic </h3>

1. The server directs request to index.js within the controllers folder.
2. Once we hit the index.js file we are presented with the the only endpoint on the server. This file imports the express router method for routiing requests, and axios for making fetch requests to an api. 
3. If the request matches the api uri, the following block of code runs. The name in the parameters is pulled out of the uri, and is inserted into a url string.
4. Using this string a axios request is made to the alphavantage API.
5. The response data from the fetch is then sent back as a response to the requesting entity.  



## Technologies

<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

<br>

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
<img src="https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg">




## License

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)