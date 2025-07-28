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
