const form = document.getElementById('form-atividade');
const imgOk = '<img src="./images/arrow_11916728.png" alt="Imagem Ok" />';
const nome = [];
const numero = [];
const notaMinima = parseFloat(prompt("Digite o nome do contato"));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    nome.push(inputNomeAgenda.value);
    numero.push(parseFloat(inputNumeroAgenda.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value >= notaMinima ? imgOk : imgOk}</td>`;
    linha += '<tr>';

    linhas += linha;

    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}