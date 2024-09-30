//Programa para verificar a sequência de Fibonacci
function pertenceFibonacci(num) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < num) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.includes(num)
        ? `O número ${num} pertence à sequência de Fibonacci.`
        : `O número ${num} não pertence à sequência de Fibonacci.`;
}

const numero = parseInt(prompt("Informe um número: "));
alert(pertenceFibonacci(numero));


//Programa para contar a letra 'a'
function contarLetraA(s) {
    const contagem = (s.match(/a/gi) || []).length;
    return `A letra 'a' aparece ${contagem} vez(es) na string.`;
}
const string = prompt("Informe uma string: ");
alert(contarLetraA(string));


// Cálculo da variável SOMA
let INDICE = 12, SOMA = 0, K = 1;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);
 

// Função para simular o controle das lâmpadas
function controleLampadas() {

    const lampadas = ["Lâmpada 1", "Lâmpada 2", "Lâmpada 3"];
    const estadoLampadas = [false, false, false];

    
    console.log("Ligando o primeiro interruptor...");
    estadoLampadas[0] = true; 
    setTimeout(() => {
        console.log("Desligando o primeiro interruptor e ligando o segundo...");
        estadoLampadas[0] = false; 
        estadoLampadas[1] = true; 


        verificarLampadas(estadoLampadas);
    }, 5000); 
}

function verificarLampadas(estado) {
    console.log("Verificando as lâmpadas...");

    if (estado[1]) {
        console.log("A lâmpada 2 está acesa (controlada pelo segundo interruptor).");
    }

    if (!estado[0] && estado[0] === false) {
        console.log("A lâmpada 1 está apagada e quente (controlada pelo primeiro interruptor).");
    }

    if (!estado[2]) {
        console.log("A lâmpada 3 está apagada e fria (controlada pelo terceiro interruptor).");
    }
}

// Iniciar a simulação
controleLampadas();
