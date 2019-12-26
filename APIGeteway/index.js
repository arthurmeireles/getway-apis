//foi necessario instalar o  express-http-proxy 
//Esse cara vai trabalhar como um proxy, 
//permitindo fazermos um dispatch da requisição recebida para outros microsserviços.

const express = require('express');// instancia o express
const httpProxy = require('express-http-proxy');// instancia o express
const app = express();
const port = 3000;


//usamos a desestruturação pra importar as constantes com os endereços de
// cada API que colocamos lá no URLs.js.
const {
  USERS_API_URL,
  PRODUCTS_API_URL,
} = require('./URLs');

//criamos as constantes userServiceProxy e productsServiceProxy,
// chamando o httpProxy() com os endereços de cada API.
const userServiceProxy = httpProxy(USERS_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

//criamos uma rota GET /users, que recebe 3 parâmetros, req, res e next. 

//E a única coisa que essa rota faz, é repassar todos esses caras pro userServiceProxy. 
app.get('/users', (req, res, next) => userServiceProxy(req, res, next));

//O mesmo acontece aqui na rota /products, passando pra productsServiceProxy.
app.get('/products', (req, res, next) => productsServiceProxy(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
