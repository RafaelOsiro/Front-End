function cumprimentar(horario, nome) {
    var frase;

    if(horario < 12) {
        frase = "Bom dia ";
    } else if (horario >= 12 && horario < 18) {
        frase = "Boa tarde ";
    } else {
        frase = "Boa noite ";
    }

    frase = frase + nome + "<br>";
    document.write(frase);
}

var x = 11;
var y = 17;
var z = 21;
var nome1 = "fulano";
var nome2 = "ciclano";
var nome3 = "beltrano";

cumprimentar(x, nome1);
cumprimentar(y, nome2);
cumprimentar(z, nome3);

function somar(par1, par2) {
    resultado = par1 + par2;
    return resultado;
}

var a = 5;
var b = 10;
var c = somar(a, b);
document.write(c);
document.write("<br>");