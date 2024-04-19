const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const tabelaCadastro = document.getElementById('tabelaCadastro');

// TROCA OBJECT OBJECT
//localStorage.setItem("pessoa", JSON.stringify());

// console.log(localStorage.getItem("nome"));

const pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));
for (const pessoa of pessoas) {
    mostraPessoa(pessoa);
}




function salvar (){
    console.log(nomeInput);
    console.log(idadeInput);

    const pessoa = {};
    pessoa.nome = nomeInput.value;
    pessoa.idade = idadeInput.value; 
    console.log(pessoa);

    let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));
    if (!pessoasCadastradas) {
        pessoasCadastradas = [];
    }

    pessoasCadastradas.push(pessoa);
    localStorage.setItem("pessoasCadastro", JSON.stringify(pessoasCadastradas));
    mostraPessoa(pessoa);
    return false;
}

function mostraPessoa(parametro){
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `
        <span> ${parametro.nome}</span>
        <span> ${parametro.idade}</span>
    `;
    tabelaCadastro.append(paragrafo);
}