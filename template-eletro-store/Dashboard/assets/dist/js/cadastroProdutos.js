addEventListener('load',()=> {
    let tabelaCliente = document.getElementById('tabela-prod').innerHTML;
    let getDados = JSON.parse(localStorage.getItem("prod"));

    getDados.map((prod , index)=>{
        tabelaCliente += `<tr id="${index}">
        <td>${prod.nome}</td>
        <td>${prod.sobrenome}</td>
        <td>${prod.nascimento}</td>
        <td>${prod.telefone}</td>
        <td>${prod.email}</td>
        <td>${prod.rua}</td>
        <td>${prod.cidade}</td>
        </tr>`
    })
   /* for(item in getDados){
        tabelaCliente += `<tr>
        <td>${getDados[item].nome}</td>
        <td>${getDados[item].sobrenome}</td>
        <td>${getDados[item].nascimento}</td>
        <td>${getDados[item].telefone}</td>
        <td>${getDados[item].email}</td>
        <td>${getDados[item].rua}</td>
        <td>${getDados[item].cidade}</td>
        </tr>`;
    }*/
    document.getElementById('tabela-prod').innerHTML = tabelaprod;
});
//buscando os dados do formulario 
let dadosprod = document.getElementById('prod');

//pegando o evento de envio do formulario
dadosprod.addEventListener('submit', (event) => {
    event.preventDefault();
    let dados = new FormData(dadosprod);
    //console.log(dados);
    //converte os dados parta um objeto
    dados = Object.fromEntries(dados.entries());
    //console.log(dados);
    postprod(dados);
})

function postprod(dadosprod){
    fetch('http://localhost/admin/ajax/cad-usuario.php',{
    method: 'POST',
    body: JSON.stringify(dadosprod)
})
.then((result) => {
    //console.log(result);
    return result.json();
})
.then((result) => {
    //console.log(result);
    cadstrarprod(result);
}
)
.catch((err) => {

});
}

function cadstrarprod(dadosprod){
    //cria um array (vetor) vazio
    let setDados = new Array();
    //verifica se existe a chave prod no localstorage
    //se existir salva os dados em SetDados
    if (localStorage.hasOwnProperty('prod')){
        setDados = JSON.parse(localStorage.getItem('prod'))
    }
    console.log(setDados);
    //adiciona os dados novos vindos do formulario do prod no array (vetor)
    setDados.push(dadosprod);
    localStorage.setItem('prod', JSON.stringify(setDados));
    let tabelaprod = document.getElementById('tabela-prod');
    let dados = `<tr>
        <td>${dadosprod.nomep}</td>
        <td>${dadosprod.peso}</td>
        <td>${dadosprod.data}</td>
        <td>${dadosprod.preco}</td>
        <td>${dadosprod.venda}</td>
        <td>${dadosprod.fornecedores}</td>
       
    </tr>`;

    tabelaprod.innerHTML += dados;
}


let btnCEP = document.getElementById('cep');
btnCEP.addEventListener('blur', ()=> {
    
fetch(`http://viacep.com.br/ws/${btnCEP.value}/json/`)
.then((result) => {
    return result.json();
})
.then((dados) => {
    atualizarForm(dados);
})
.catch((err) => {

});
})

function atualizarForm(dados){
    let prodnomep = document.getElementById('nomep');
    let prodpeso = document.getElementById('peso');
    let proddata = document.getElementById('data');
    let prodpreco = document.getElementById('preco');
    let prodvenda = document.getElementById('venda');
    let prodfornecedores = document.getElementById('fornecedores');


    
}