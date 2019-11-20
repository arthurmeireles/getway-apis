
const app = require('express')(); // instancia o express
function soma(a, b){
    var soma;
    parseInt(a);
    parseInt(b);
    soma=a+b;
    return a+b;
}



// cria uma rota GET em /products
app.get('/products', (req, res) => res.send(soma(req.query.a, req.query.b))); // mostra um "Hello Products API" na tela

app.listen(3002, () => console.log(`Products API listening on port 3002!`));
