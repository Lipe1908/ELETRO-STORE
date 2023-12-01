addEventListener('load',()=> {
    let tabelaCliente = document.getElementById('tabela-cliente').innerHTML;
    let getDados = JSON.parse(localStorage.getItem("cliente"));

    getDados.map((cliente , index)=>{
        tabelaCliente += `<tr id="${index}">
        <td>${cliente.nome}</td>
        <td>${cliente.sobrenome}</td>
        <td>${cliente.nascimento}</td>
        <td>${cliente.telefone}</td>
        <td>${cliente.email}</td>
        <td>${cliente.rua}</td>
        <td>${cliente.cidade}</td>
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
    document.getElementById('tabela-cliente').innerHTML = tabelaCliente;
});
//buscando os dados do formulario 
let dadosCliente = document.getElementById('cliente');

//pegando o evento de envio do formulario
dadosCliente.addEventListener('submit', (event) => {
    event.preventDefault();
    let dados = new FormData(dadosCliente);
    //console.log(dados);
    //converte os dados parta um objeto
    dados = Object.fromEntries(dados.entries());
    //console.log(dados);
    postCliente(dados);
})

function postCliente(dadosCliente){
    fetch('http://localhost/admin/ajax/cad-usuario.php',{
    method: 'POST',
    body: JSON.stringify(dadosCliente)
})
.then((result) => {
    //console.log(result);
    return result.json();
})
.then((result) => {
    //console.log(result);
    cadstrarCliente(result);
}
)
.catch((err) => {

});
}

function cadstrarCliente(dadosCliente){
    //cria um array (vetor) vazio
    let setDados = new Array();
    //verifica se existe a chave cliente no localstorage
    //se existir salva os dados em SetDados
    if (localStorage.hasOwnProperty('cliente')){
        setDados = JSON.parse(localStorage.getItem('cliente'))
    }
    console.log(setDados);
    //adiciona os dados novos vindos do formulario do cliente no array (vetor)
    setDados.push(dadosCliente);
    localStorage.setItem('cliente', JSON.stringify(setDados));
    let tabelaCliente = document.getElementById('tabela-cliente');
    let dados = `<tr>
        <td>${dadosCliente.nome}</td>
        <td>${dadosCliente.sobrenome}</td>
        <td>${dadosCliente.nascimento}</td>
        <td>${dadosCliente.telefone}</td>
        <td>${dadosCliente.email}</td>
        <td>${dadosCliente.rua}</td>
        <td>${dadosCliente.cidade}</td>
    </tr>`;

    tabelaCliente.innerHTML += dados;
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
    let clienteRua = document.getElementById('rua');
    let clienteBairro = document.getElementById('bairro');
    let clienteCidade = document.getElementById('cidade');
    let clienteEstado = document.getElementById('estado');
    let clientePais = document.getElementById('pais');
    let clienteIBGE = document.getElementById('ibge');

    clienteRua.value = dados.logradouro;
    clienteBairro.value = dados.bairro;
    clienteCidade.value = dados.localidade;
    clienteEstado.value = dados.uf;
    clienteIBGE.value = dados.ibge;
    
}