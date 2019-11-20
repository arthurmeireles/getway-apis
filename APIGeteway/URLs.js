//Esse cara será o nosso ponto central de URLs dos nossos microsserviços. 
//Sempre que tivermos uma URL nova, ou alterada, temos que vir nesse arquivo.

module.exports = {
  USERS_API_URL: 'http://localhost:3001/users/:num',
  PRODUCTS_API_URL: 'http://localhost:3002/products',
};
//USERS_API_URL e  PRODUCTS_API_URL Cada uma contém o endereço e porta do serviço correspondente.