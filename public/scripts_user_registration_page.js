var check;
function checkFields(event){

    const valuesToCheck = [
        "email",
        "password",
        "confirmpassword",
    ] 
    
    const isEmpty = valuesToCheck.find(function(value){
        
        var password = document.querySelector('input#password').value;
        var confirmpassword = document.querySelector('input#confirmpassword').value;

        const checkIfIsString = typeof event.target[value].value ==="string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            check = 0
            return true
            
        }
        if(password != confirmpassword){
            check = 1
            return true
            
        }
    })

    if(isEmpty){

        event.preventDefault()
        if(check==0){
            var text = document.createTextNode('Por favor, preencha todos os campos!')
        }
        if(check==1){
            var text = document.createTextNode('As senhas não são iguais!')
        }
       
        const emptyFieldsElementeP = document.querySelector('div#emptyFields p')

        const button = document.querySelector('form button')
        
        emptyFieldsElementeP.appendChild(text)
        button.disabled = true
        
        setTimeout(function(){ 
            emptyFieldsElementeP.removeChild(text)
            button.disabled = false
        }, 3000);
          
    }
}