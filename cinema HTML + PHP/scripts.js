const prompt = require('prompt-sync')({sigint: true});

let sala = Array(10).fill().map(() => Array(10).fill(0));

function exibirMenu() {
    let menu = document.GetElementByi
    console.log("\nMenu:");
    console.log("1 - Cadastrar assento");
    console.log("2 - Percorrer todos os assentos");
    console.log("3 - Buscar assento");
    console.log("4 - Excluir assento");
    console.log("5 - Alterar estado de um assento");
    console.log("6 - Sair");
    console.log("Escolha uma opção: ");
}

function cadastrarAssento() {
    if (isLotado()) {
        console.log("A sala está lotada.");
        return;
    }

    let linha = parseInt(prompt("Digite a linha (0-9): "));
    let coluna = parseInt(prompt("Digite a coluna (0-9): "));

    if (validarCoordenadas(linha, coluna)) {
        if (sala[linha][coluna] === 0) {
            sala[linha][coluna] = 1;
            console.log("Assento cadastrado com sucesso.");
        } else {
            console.log("O assento já está ocupado.");
        }
    } else {
        console.log("Coordenadas inválidas. Tente novamente.");
    }
}

function percorrerAssentos() {
    console.log("Estado atual da sala de cinema:");
    for (let i = 0; i < 10; i++) {
        console.log(sala[i].join(' '));
    }
}

function buscarAssento() {
    let linha = parseInt(prompt("Digite a linha (0-9): "));
    let coluna = parseInt(prompt("Digite a coluna (0-9): "));

    if (validarCoordenadas(linha, coluna)) {
        if (sala[linha][coluna] === 1) {
            console.log(`O assento na posição [${linha}][${coluna}] está ocupado.`);
        } else {
            console.log(`O assento na posição [${linha}][${coluna}] está vazio.`);
        }
    } else {
        console.log("Coordenadas inválidas. Tente novamente.");
    }
}

function excluirAssento() {
    let linha = parseInt(prompt("Digite a linha (0-9): "));
    let coluna = parseInt(prompt("Digite a coluna (0-9): "));

    if (validarCoordenadas(linha, coluna)) {
        if (sala[linha][coluna] === 1) {
            sala[linha][coluna] = 0;
            console.log("Assento desocupado com sucesso.");
        } else {
            console.log("O assento já está vazio.");
        }
    } else {
        console.log("Coordenadas inválidas. Tente novamente.");
    }
}

function alterarAssento() {
    let linha = parseInt(prompt("Digite a linha (0-9): "));
    let coluna = parseInt(prompt("Digite a coluna (0-9): "));

    if (validarCoordenadas(linha, coluna)) {
        let novoEstado = parseInt(prompt("Digite o novo estado (1 para ocupado, 0 para vazio): "));
        if (novoEstado === 1 || novoEstado === 0) {
            sala[linha][coluna] = novoEstado;
            console.log("Estado do assento alterado com sucesso.");
        } else {
            console.log("Estado inválido. Tente novamente.");
        }
    } else {
        console.log("Coordenadas inválidas. Tente novamente.");
    }
}

function sair() {
    console.log("Obrigado por utilizar o sistema!");
    process.exit(0);
}

function validarCoordenadas(linha, coluna) {
    return Number.isInteger(linha) && Number.isInteger(coluna) &&
           linha >= 0 && linha < 10 && coluna >= 0 && coluna < 10;
}

function isLotado() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (sala[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function menu() {
    while (true) {
        exibirMenu();
        let opcao = parseInt(prompt());

        switch (opcao) {
            case 1:
                cadastrarAssento();
                break;
            case 2:
                percorrerAssentos();
                break;
            case 3:
                buscarAssento();
                break;
            case 4:
                excluirAssento();
                break;
            case 5:
                alterarAssento();
                break;
            case 6:
                sair();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

// Inicia o menu
menu();

