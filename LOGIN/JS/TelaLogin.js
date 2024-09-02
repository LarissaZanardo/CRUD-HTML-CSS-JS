const email = "admin@admin.com";
const senha = "Abc123";


var campoEmail = document.getElementById("email"); /* capturar o input de email*/
var campoSenha = document.getElementById("senha"); /* capturar o input de senha */
var botaoEntrar = document.getElementById("btn-entrar"); /* capturar o botão entrar */



/* fica monitorando o botao para quando clicar, executa a função que esta dento de chaves */

botaoEntrar.addEventListener('click', () => { 
    
    if(campoEmail.value == "" || campoSenha.value ==""){   /*Veririfica se esse campo nao esta vazio*/
        alert("Email e Senha devem ser preenchidos");
        return;
    }else if(campoEmail.value.toLowerCase() != email || campoSenha.value != senha){
        alert("Usuario ou Senha invalidos");
        return;
    }else {
        window.open("TelaPrincipal.html", "_self"); /*window.open abre outra aba se colocar _self abre na mesma aba*/
    }
    });




