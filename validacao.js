// Validação de input's

var txtGlobal       = 'Favor preencher ';

var inNome          = document.getElementById('nomePersonagem');
var inJogador       = document.getElementById('nomeJogador');
var slcRace         = document.getElementById('slc-race');
var slcClass        = document.getElementById('slc-class');
var slcAntecedentes = document.getElementById('slc-antecedentes');
var slcAlinhamento  = document.getElementById('slc-align');

var btnSubmit       = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();

    if(inNome.value == '') {
        alert(txtGlobal + 'o NOME!');
    }

    if(inJogador.value == '') {
        alert(txtGlobal + 'o nome do JOGADOR!');
    }

    if(slcRace.value == '') {
        alert(txtGlobal + 'a RAÇA!');
    }

    if(slcClass.value == '') {
        alert(txtGlobal + 'a CLASSE!');
    }

    if(slcAntecedentes.value == '') {
        alert(txtGlobal + 'os ANTECEDENTES!');
    }

    if(slcAlinhamento.value == '') {
        alert(txtGlobal + 'o ALINHAMENTO!');
    }

});