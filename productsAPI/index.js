
const app = require('express')(); // instancia o express
function soma(a, b){
    a = parseInt(a, 10);
    b = parseInt(b, 10);

    console.log('esse é '+ a);

    console.log('esse é '+ b);
    const soma = a + b;
    return soma;
}

// cria uma rota GET em /products
app.get('/products', (req, res) => res.send(soma(req.params.a, req.params.b))); // mostra um "Hello Products API" na tela

app.listen(3002, () => console.log(`Products API listening on port 3002!`));
