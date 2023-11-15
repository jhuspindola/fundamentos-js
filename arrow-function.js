function apresentar(nome) {
    return `Meu nome é ${nome}.`;
}

// Arrow function

const apresentaArrow = nome => `Meu nome é ${nome}.`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num3, num4) => {
    if (num3 > 10 || num4 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num3 + num4;
    }
}
