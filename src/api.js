
const axios = require('axios');

const api = axios.create({ 
    baseURL : 'https://estagiobackend.herokuapp.com/owners'
});

module.exports = api;