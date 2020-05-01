function checkFields(event){

    const valuesToCheck = [
        "filter",
    ] 

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value ==="string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if(isEmpty){

        event.preventDefault()
        
        const text = document.createTextNode('Por favor, informe o nome ou o CPF!')
        const emptyFieldsElementeP = document.querySelector('div#emptyFields p')

        const button = document.querySelector('input#buttonFilter')
        
        emptyFieldsElementeP.appendChild(text)
        button.disabled = true
        
        setTimeout(function(){ 
            emptyFieldsElementeP.removeChild(text)
            button.disabled = false
        }, 3000);
          
    }
}

function formatCPF(number){
    let open = [...number];
    let exit=[];
    for (var i=0;i<open.length;i++){
       
        if (i==3 || i==6){
            exit.push(".");
        }

        if (i==9){
            exit.push("-");
        }
        exit.push(open[i]);
    }   
    
    return exit;
}
// Aqui começa o script da paginação
var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // Convertendo dados iniciais
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // Adiciona paginas por numero(Do [s] Até [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // Adiciona o separador ... na ultima pagina
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // Adiciona o separador ... na ultima pagina
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Manipuladores
    // --------------------

    // Muda Pagina
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // Pagina Anterior
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // Proxima Pagina
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // corrente de paginas
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // Escreve a Paginação
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // Encontra o tipo de paginação
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Inicialização
    // --------------------

    // Butões de Antes e Depois
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // Cria o esqueleto
    Create: function(e) {

        var html = [
            '<a>&#9668;</a>', // Botão anterior
            '<span></span>',  // Container da Paginação
            '<a>&#9658;</a>'  // Proximo botão
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Inicialização das variaveis
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size: 30, // Tamanho da Pagina
        page: 1,  // Pagina Selecionada
        step: 3   // Paginas antes e depois das atuais
    });
};

document.addEventListener('DOMContentLoaded', init, false);
