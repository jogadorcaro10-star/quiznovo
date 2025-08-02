
function vperg1(botaoClicado, opcaoSelecionada){
    if(opcaoSelecionada =='c1'){
        var respCerta = document.getElementById('c1')
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp1').innerHTML="✅Parabéns você acertou!"
    } else {
        var respCerta = document.getElementById('c1')
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
         document.getElementById('resp1').innerHTML="❌Tente novamente"
    }
}
function vperg2(botaoClicado, opcaoSelecionada) {
    if (opcaoSelecionada == 'b2') {
        var respCerta = document.getElementById('b2')
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp2').innerHTML = "✅Parabéns você acertou!"
    } else {
        var respCerta = document.getElementById('b2')
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp2').innerHTML = "❌Tente novamente"
    }
}
function vperg3(botaoClicado, opcaoSelecionada) {
    if (opcaoSelecionada == 'c3') {
        var respCerta = document.getElementById('c3')
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp3').innerHTML = "✅Parabéns você acertou!"
    } else {
        var respCerta = document.getElementById('c3')
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp3').innerHTML = "❌Tente novamente"
    }
}
function limpar() {
    // Limpa respostas
    document.getElementById('resp1').textContent = '';
    document.getElementById('resp2').textContent = '';
    document.getElementById('resp3').textContent = '';

    // Reativa e reseta estilo dos botões
    for (let i = 1; i <= 3; i++) {
        ['a', 'b', 'c', 'd'].forEach(letra => {
            const botao = document.getElementById(letra + i);
            if (botao) {
                botao.disabled = false;
                botao.style.backgroundColor = ''; // ou outra cor padrão
            }
        });
    }
}
