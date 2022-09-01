const inputMensaje = document.querySelector("#textodeIngreso");
const inputResultado = document.querySelector("#textodeDesencriptador");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");



function encriptar (){
    textodeDesencriptador.style.backgroundImage="candado.jpg"
    var  varEnc= inputMensaje.value;
    var cadenaEnc = {
        e:"enter", i:"imes",a:"ai",o:"ober", u:"ufat"
     };
        str = varEnc.replace(/e|i|a|o|u/g, function(matched){
        return cadenaEnc[matched];
       });
         inputResultado.value = str;       
}

function desencriptar (){
    var  varEnc= inputMensaje.value;
    var cadenaEnc = {
        enter:"e", imes:"i",ai:"a",ober:"o", ufat:"u"
     };
        str = varEnc.replace(/enter|imes|ai|ober|ufat/g, function(matched){
        return cadenaEnc[matched];
       });
         inputResultado.value = str;
         textodeIngreso.value = "";
         botonHab();
}

function copiar () {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    textodeIngreso.value = "";
    textodeIngreso.focus();
    mostrar();
}

function mostrar (){
    swal("Gracias", "Mensaje Copiado!", "success");
    textodeDesencriptador.value = "";
    botonDeshab();
}

function botonDeshab (){
    btnEncriptar.style.backgroundColor = "rgb(206, 212, 218)";
    btnEncriptar.disabled = true;
}

function botonHab (){
    btnEncriptar.style.backgroundColor = "rgb(53, 110, 169)";
    btnEncriptar.disabled = false;
    onclick.btnEncriptar.style.backgroundColor = "red";
    
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;
















/*
let msg = new SpeechSynthesisUtterance();
msg.text = " "
msg.lang = "es-Es";
window.speechSynthesis.speak(msg)
*/