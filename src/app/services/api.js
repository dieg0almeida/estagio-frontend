const axios = require('axios');

const api = axios.create({
    // a minha baseURL é o domínio da minha aplicação
    //ele termina no .com 
    baseURL : 'https://estagiobackend.herokuapp.com'
});

module.exports = api;