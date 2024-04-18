// busca elementos por ID
var nomeCompletoInput = document.getElementById('nomeCompleto');
var dataNascimetnoInput = document.getElementById('dataNascimento');
var emailInput= document.getElementById('email');
var senhaInput = document.getElementById('senha');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

// console.log(nomeCompletoInput)
// console.log(dataNascimetnoInput)
// console.log(emailInput)
// console.log(senhaInput)

function cadastrarUsuario() {
    console.log(tabelaCadastroDiv.value);
    console.log(nomeCompletoInput.value);
    console.log(dataNascimetnoInput.value);
    console.log(emailInput.value);
    console.log(senhaInput.value);

    const paragrafo = document.createElement('p');
    // paragrafo.innerText = '<strong>Nickolas Knihs</strong>';
    paragrafo.innerHTML += `<span style="color: red; background-color: green;">${nomeCompletoInput.value} </span> 
    <span style="color: white; background-color: black;">${dataNascimetnoInput.value} </span> 
    <span style="color: purple; background-color: yellow;">${emailInput.value} </span> 
    <span style="color: blue; background-color: gray;">${senhaInput.value} </span>`;
    tabelaCadastroDiv.append(paragrafo);
    console.log(paragrafo);
    
    console.log("Usuario cadastrado");
}


