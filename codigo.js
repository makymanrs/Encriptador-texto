function encriptar(){
    var texto= document.getElementById("text").value.toLowerCase();
    var cifrado=texto.replace(/e/igm,"enter");
    var cifrado=cifrado.replace(/o/igm,"ober");
    var cifrado=cifrado.replace(/i/igm,"imes");
    var cifrado=cifrado.replace(/a/igm,"ai");
    var cifrado=cifrado.replace(/u/igm,"ufat");

    document.getElementById("nino").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display ="inherit";

}
function desencriptar(){
    var texto= document.getElementById("text").value.toLowerCase();
    var cifrado=texto.replace(/enter/igm,"e");
    var cifrado=cifrado.replace(/ober/igm,"o");
    var cifrado=cifrado.replace(/imes/igm,"i");
    var cifrado=cifrado.replace(/ai/igm,"a");
    var cifrado=cifrado.replace(/ufat/igm,"u");

    document.getElementById("nino").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").innerHTML = cifrado
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display ="inherit";
}
function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio el texto");
}