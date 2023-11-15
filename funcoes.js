// let x = "";
// console.log(x);
// x = "Oi!";

// 1) Declara a função

function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executa a função (1 ou mais vezes)

imprimeTexto("Oi!");
imprimeTexto("Outro texto.");
imprimeTexto(soma());

function soma() {
    return 2 + 2;
}

// console.log(soma());
