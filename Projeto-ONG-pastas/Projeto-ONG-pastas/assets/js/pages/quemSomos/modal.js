function abaSelecionada (event, nomeAba){
    let opcoes = document.getElementsByClassName("opcoes")
for ( i = 0; i < opcoes.length; i++){
    opcoes[i].style.display = "none"
}




let btnSelecao = document.getElementsByClassName("btnSelecao")
for ( i = 0; i < btnSelecao.length; i++){
    btnSelecao[i].className = btnSelecao[i].className.replace(" ativo", "")
}

document.getElementById(nomeAba).style.display = "flex"
event.currentTarget.className += " ativo"
}