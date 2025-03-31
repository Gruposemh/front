let conta = 1
document.getElementById("radio1").checked = true;

setInterval( function(){
  proximaImagem()
}, 3000)

function proximaImagem(){
   conta++
   if(conta>4){
       conta = 1;
   }

   document.getElementById("radio" + conta).checked = true
}