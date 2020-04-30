
const api = require('../services/api');

module.exports = {

    async renderSignIn(req, res) {
        try {
            return res.render('login_page.njk');
        } catch (err) {
            console.warn('Erro na chamada da página de login.');
        }
    },

    async renderConsultation(req, res) {
        try {
            const response = await api.get('/owners');
            const owners = [...response.data.owners]
            console.log(owners);
            return res.render('consultation_page.njk', {owners});
        } catch (err) {
            console.warn('Erro na API');
        }
    },

}

