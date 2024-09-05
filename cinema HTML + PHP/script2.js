function exibirMenu() {
    let menu = document.getElementById("menu")
    let m1 = document.getElementById("m1")
    let m2 = document.getElementById("m2")
    let m3 = document.getElementById("m3")
    let m4 = document.getElementById("m4")
    let m5 = document.getElementById("m5")
    let m6 = document.getElementById("m6")
    let m7 = document.getElementById("m7")
    menu.innerHTML = "Menu";
    m1.innerHTML = "1 - Cadastrar assento";
    m2.innerHTML = "2 - Percorrer todos os assentos";
    m3.innerHTML = "3 - Buscar assento";
    m4.innerHTML = "4 - Excluir assento";
    m5.innerHTML = "5 - Alterar estado de um assento";
    m6.innerHTML = "6 - Sair";
    m7.innerHTML = "Escolha uma opção: ";
}

exibirMenu();