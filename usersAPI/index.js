const app = require('express')();


function parImpar(a){
    console.log(a);
    const resto = a%2;
    if( resto == 0){
        console.log("Par");
        return "Par";
    }
    if( resto == 1){
        console.log("Impar");
        return "Impar";
    }
}

app.get('/users', (req, res) => res.send(parImpar(req.query.a)));



//muda a porta em relação ao product
app.listen(3001, () => console.log(`Users API listening on port 3001!`));

