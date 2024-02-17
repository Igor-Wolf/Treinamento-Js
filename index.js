// # 2️⃣ Calculadora de partidas Rankeadas

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"



//Entrada
var matriz = [["Arthur", 99, "",0], ["Lancelot", 75, "",10], ["Galahad", 120, "",17]];


function ranked(matriz,i) {
    
    result = matriz[i][1] - matriz[i][3]

    if (result <= 10) {
        matriz[i][2]="Ferro"
    }
    else if (result > 10 && result <= 20) {
        matriz[i][2] = "Bronze"
    }
    else if (result > 20 && result <= 50) {
        matriz[i][2] = "Prata"
    }
    else if (result > 50 && result <= 70) {
        matriz[i][2] = "Ouro"
    }
    else if (result > 70 && result <= 80) {
        matriz[i][2]= "Platina"
    }
    else if (result > 80 && result <= 90) {
        matriz[i][2]= "Ascendente"
    }
    else if (result > 90 && result <= 100) {
        matriz[i][2]= "Imortal"
    }
    else if (result > 100) {
        matriz[i][2]= "Radiante"
    }
    return result
}

for (let i = 0; i < matriz.length; i++) {
    resultado = ranked(matriz,i)
    console.log("O Herói de nome " + matriz[i][0] + " tem saldo de " + resultado + " e está no rank " + matriz[i][2])
}