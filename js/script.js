


document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

/* esta função valida os campos do formulário*/

function validaFormulario() {

if( document.getElementById("nome").value  != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone").value !="" ){

    alert ("Prontinho! Você receberá as novidades por e-mail");

}else {

    alert (" Por favor, preecha os campos em branco!");
}

}   