
var modal = document.getElementById("modal");
var fechar = document.getElementById("fecharModal");

document.querySelectorAll('.continuar').forEach(function(button) {
    button.onclick = function() {
     
        document.getElementById("data").innerText = this.getAttribute("data");
        document.getElementById("titulo").innerText = this.getAttribute("titulo");
        document.getElementById("conteudo").innerText = this.getAttribute("conteudo");
        document.getElementById("fotoNoticia").src = this.getAttribute("fotoNoticia");
     modal.style.display = "block"; 
 }
});





window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}