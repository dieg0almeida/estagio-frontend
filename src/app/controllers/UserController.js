module.exports = {

    async getApi(){
        try {
            const response = await api.get('./api');
        } catch (err) {
            console.warn('Erro na API');
        }

        console.log(reponse);
    },
    

    renderSingIn(req, res){
        this.getApi
        return res.render('consultation_page.njk');
    },
 
}

