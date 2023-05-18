//SOMA
var matriz1 = [];
var matriz2 = [];
var soma = [];

alert("No próxima janela você deverá inserir o número de colunas \n"
    + "e linhas de duas matrizes");

var nrlinha = parseInt(prompt("Digite o número da linhas da primeira matriz:"));
var nrcol = parseInt(prompt("Digite o número da colunas da primeira matriz:"));
var nrlinha1 = parseInt(prompt("Digite o número da linhas da segunda matriz:"));
var nrcol1 = parseInt(prompt("Digite o número da colunas da segunda matriz:"));


while (nrcol != nrlinha1) {
    nrlinha1 = parseInt(prompt("Digite novamente o segundo número das linhas:"));
}

document.writeln('<div class="div">');

document.writeln('<h5 class="subtitulo">Soma</h1>');

document.writeln('<h6>Primeira Matriz</h6>');



for (i = 0; i < nrlinha; i++) {

    matriz1.push([]);
    soma.push([]);

    for (j = 0; j < nrcol; j++) {

        matriz1[i][j] = parseInt(Math.random() * 10);
        soma[i][j] = matriz1[i][j];

    }

}

document.write("<table border=1>");

for (i = 0; i < matriz1.length; i++) {

    var linha = '<tr>';

    for (x = 0; x < matriz1[i].length; x++) {

        linha = linha + "<td>" + matriz1[i][x] + "</td>";

    }

    linha = linha + "</tr>"

    document.write(linha);
}

document.write("</table>");

/////////////////////////////////////////////

document.writeln('<h6>Segunda Matriz</h6>');

for (m = 0; m < nrlinha; m++) {

    matriz2.push([]);

    for (n = 0; n < nrcol; n++) {

        matriz2[m][n] = parseInt(Math.random() * 10);
        soma[m][n] = soma[m][n] + matriz2[m][n];

    }

}


document.write("<table border=1>");

for (i = 0; i < matriz2.length; i++) {

    var linha1 = '<tr>';

    for (x = 0; x < matriz2[i].length; x++) {

        linha1 = linha1 + "<td>" + matriz2[i][x] + "</td>";

    }

    linha1 = linha1 + "</tr>"

    document.write(linha1);
}

document.write("</table>");



document.writeln('<h6>Resultado</h6>');

document.write("<table border=1>");

for (i = 0; i < soma.length; i++) {

    var linha2 = '<tr>';

    for (x = 0; x < soma[i].length; x++) {

        linha2 = linha2 + "<td>" + soma[i][x] + "</td>";

    }

    linha2 = linha2 + "</tr>"

    document.write(linha2);
}

document.write("</table>");

document.writeln('</div>');

document.writeln('<br>');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var matriz3 = [];
var matriz4 = [];
var mult = [];

document.writeln('<div class="div">');

document.writeln('<h5 class="subtitulo">Multiplicação</h1>');

document.writeln('<h6>Terceira Matriz</h6>');

for (i = 0; i < nrlinha; i++) {

    matriz3.push([]);

    for (j = 0; j < nrcol; j++) {

        matriz3[i][j] = parseInt(Math.random() * 10);

    }

}

document.write("<table border=1>");

for (i = 0; i < matriz3.length; i++) {

    var linha = '<tr>';

    for (x = 0; x < matriz3[i].length; x++) {

        linha = linha + "<td>" + matriz3[i][x] + "</td>";

    }

    linha = linha + "</tr>"

    document.write(linha);
}

document.write("</table>");

/////////////////////////////////////////////

document.writeln('<h6>Quarta Matriz</h6>');

for (m = 0; m < nrlinha1; m++) {

    matriz4.push([]);

    for (n = 0; n < nrcol1; n++) {

        matriz4[m][n] = parseInt(Math.random() * 10);

    }

}


document.write("<table border=1>");

for (i = 0; i < matriz4.length; i++) {

    var linha1 = '<tr>';

    for (x = 0; x < matriz4[i].length; x++) {

        linha1 = linha1 + "<td>" + matriz4[i][x] + "</td>";

    }

    linha1 = linha1 + "</tr>"

    document.write(linha1);
}

document.write("</table>");

document.writeln('<h6>Resultado</h6>');

document.write("<table border=1>");

for(i=0; i< nrlinha;i++){
    
    mult.push([]);
    
    for(j=0; j<nrcol1;j++){
    
        mult[i][j]=0;
    
        for(y=0; y<nrlinha1; y++){
            
            mult[i][j] += matriz3[i][y] * matriz4[y][j];
        }
    }
}

for (i = 0; i < mult.length; i++) {

    var linha2 = '<tr>';

    for (x = 0; x < mult[i].length; x++) {

        linha2 = linha2 + "<td>" + mult[i][x] + "</td>";

    }

    linha2 = linha2 + "</tr>"

    document.write(linha2);
}

document.write("</table>");

document.writeln('</div>');
