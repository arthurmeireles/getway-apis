const app = require('express')();


function multiplicacao(a, b){
    var multiplicacao;
    parseInt(a);
    parseInt(b);
    multiplicacao=a*b;
    return multiplicacao;
}
app.get('/users', (req, res) => res.send(multiplicacao(req.query.a, req.query.b)));
//muda a porta em relação ao product
app.listen(3001, () => console.log(`Users API listening on port 3001!`));

