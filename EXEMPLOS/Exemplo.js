
/*função sem parametro e sem retorno VOID vazia*/
function dispararMsg(){
    alert("Oi")

}

dispararMsg();


/* função com parametro e sem retorno  o parametro é a msg*/
function dispararMsg2(mensagem){
    alert(mensagem);
}

dispararMsg2("Minha Mensagem"); 


/* função sem parametro e com retorno */

function retornarNumeroMegaSena(){
    var Nmega =[1, 14, 23, 28, 32, 41]
    return Nmega;

} 

var resultadoMegaSena = retornarNumeroMegaSena(); /*para armazenar um resultado em variavel*/

/* Função com parametro e com retorno */

function retornarSeParouImpar(numero){  /* %2 é o resto da divisão */
    if(numero % 2 != 0){
        return "Impar"
    }else{
        return "Par"
    }

}
var numero = prompt("Digite um numero")
var resultado = retornarSeParouImpar(numero);

dispararMsg2(resultado);

dispararMsg2(resultado);


/* Objetivo, tipo de variavel com propriedades especificar */

/*exemplo var pessoa ={
nome: "Fulano",
idade: 26
sexo: F
casado: True}
preferencias [Musica, Game, Filme]     cria um objeto pessoa com tudo isso e para acessar pessoa.nome pessoa.casado*/