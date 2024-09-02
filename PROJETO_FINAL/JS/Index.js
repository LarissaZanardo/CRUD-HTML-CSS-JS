var tbody = document.querySelector("table>tbody"); // usado para selecionar o primeiro elemento
var form = {                                      //mapear todos os campo que preciso

nome:document.querySelector("#nome"),
quantidade:document.getElementById("quantidade"),
valor:document.getElementById("valor"),
btnSalvar:document.getElementById("btn-salvar"),
btnCancelar:document.getElementById("btn-cancelar"),


}


form.btnSalvar.addEventListener('click', () =>{
// quando clicado verificar se os campos foram preenchidos, se nao foi: mandar msg para preencher, se for enviar dados para salvar na api
var produto = {
    nome:form.nome.value,
    quantidadeEstoque:form.quantidade.value,
    valor:form.valor.value
}; // cria o objeto produto com os valores dentro do form

//verificar se os campos nao foram preenchido

if (!produto.nome == "" || !produto.quantidadeEstoque || !produto.valor)
    alert("Os campos Nome, quantidade e valor, são obrigatorios!")
    return;
});



function obterProdutosDaApi(){

fetch("http://localhost:3000/produtos") /*Tentar pegar os dados da API, promessa de tentar pegar*/
.then(response => response.json()) //se funcionar transforma a resposta em json

//console.log(response); //mostra o retorno da API
// Para cada produto, preencher a tabela
.then(response => {
    
    preencherTabela(response);// chama a função para preencher os produtos e passa o resultado do json


})

.catch(erro => console.log(erro)) // se der erro
}


function preencherTabela(produtos){ //para preencher a tabela retorna os produtos

    produtos.map(produto => {                  //trata os produtos entra no array é a mesma coisa que for each

        var tr = document.createElement("tr"); // cria um elemento tr que é a a linha da tabela
        var tdId = document.createElement("td"); // que é a celula da tabela
        var tdNome = document.createElement("td");
        var tdQuantidade = document.createElement("td");
        var tdValor = document.createElement("td");

        tdId.textContent = produto.id;   // textContent pega o que tem dento do id
        tdNome.textContent = produto.nome;
        tdQuantidade.textContent = produto.quantidadeEstoque;  // tem que colocar o nome igual o da api
        tdValor.textContent = produto.valor;


        tr.appendChild(tdId); // adiciona o valor da td dentro da tr adiciona um filho 
        tr.appendChild(tdNome);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdValor);

        tbody.appendChild(tr); // vai na tbody que é o corpo da  tabela, adicona tr que são os valores coletados

});

}


obterProdutosDaApi();
