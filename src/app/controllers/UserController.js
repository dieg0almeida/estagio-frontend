//antes de usar a variável vcs precisam importar ela.
const api = require('../services/api');

module.exports = {

    //não precisa criar um método novo, pode fazer dentro do renderSignIn

    async renderSignIn(req, res) {
        try {
            //a string que vc passa como parâmetro no método get
            //são as rotas, o exemplo que eu dei lá no grupo estava assim
            const response = await api.get('/owners');
            //no response vem um monte de coisa, os dados ficam dentro do objeto data
            //dentro do objeto data tem um array owners com os dados
            console.log(response.data);
            return res.render('forgot_password_page.njk');
        } catch (err) {
            console.warn('Erro na API');
        }
    },

}

