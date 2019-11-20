const app = require('express')();


function multiplicacao(a){
    console.log(a);
    return ++a;
}


app.get('/users', (req, res) => res.send(multiplicacao(req.params.num)));



//muda a porta em relação ao product
app.listen(3001, () => console.log(`Users API listening on port 3001!`));

