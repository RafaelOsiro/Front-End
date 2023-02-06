function validarFormulario() {
                
    var nome = validarNome();
    var sexo = validarSexo();
    var maiorDeIdade = validarMaiorDeIdade();
    var conheceu = validarComoConheceuOSite();

    if(nome && sexo && maiorDeIdade && conheceu) {
        document.forms["cadastro"].submit();
    }
}

function validarNome() {
    var nome = document.forms["cadastro"].nome.value;
    
    if(nome == "") {
        alert("É necessário preencher o campo nome corretamente!");
        return false;
    }
    return true;
}

function validarSexo() {
    var totalOpcoes = document.forms["cadastro"].sexo.length;
    var opcaoEscolhida = null;

    for(var i = 0; i < totalOpcoes; i++) {
        if(document.forms["cadastro"].sexo[i].checked == true)  {
            opcaoEscolhida = document.forms["cadastro"].sexo[i].value;
        }
    }

    if(opcaoEscolhida == null) {
        alert("É necessário selecionar o campo sexo");
        return false;
    }

    return true;
}

function validarMaiorDeIdade() {
    var maior = document.forms["cadastro"].maiorDe18Anos.checked;

    if(maior == false) {
        alert("Esse site é restrito para maiores de idade!");
        return false;
    }

    return true;
}

function validarComoConheceuOSite() {
    var conheceu = document.forms["cadastro"].comoConheceuOSite.selectedIndex;

    if(conheceu == 0) {
        alert("É necessário selecionar como conheceu o site!");
        return false;
    }
    return true;
}