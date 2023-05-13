/* aqui estamos creado una variable  y estamos capturando la informacion  guardada en la class .enter-text */

const MSN_ENCRIPTAR = document.querySelector(".enter-text"),
  MSN_ENCRIPTADO = document.querySelector(".message"),
  TEXTO = document.querySelector(".texto");

function botonEncriptar() {
  if (MSN_ENCRIPTAR.value != "") {
    const TEXTOENCRIPTADO = encriptar(MSN_ENCRIPTAR.value);
    MSN_ENCRIPTAR.value = "";
    MSN_ENCRIPTADO.value = TEXTOENCRIPTADO;
    MSN_ENCRIPTADO.style.backgroundImage = "none";
    TEXTO.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
  } else {
    TEXTO.style.visibility = "visible";
    btnCopiar.style.visibility = "hidden";
    MSN_ENCRIPTAR.value = "";
    MSN_ENCRIPTADO.value = "";
    MSN_ENCRIPTADO.style.backgroundImage = "url(recursos/Muñeco.png)";
    alert(
      "Aun no ha ingresado un mensaje, recuerde que solo se permite ingresar letras minusculas y sin acentos."
    );
  }
}

function botonDesencriptar() {
  if (MSN_ENCRIPTAR.value != "") {
    const TEXTODESENCRIPTADO = desencriptar(MSN_ENCRIPTAR.value);
    MSN_ENCRIPTADO.value = TEXTODESENCRIPTADO;
    MSN_ENCRIPTAR.value = "";
    MSN_ENCRIPTADO.style.backgroundImage = "none";
    TEXTO.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
  } else {
    TEXTO.style.visibility = "visible";
    btnCopiar.style.visibility = "hidden";
    MSN_ENCRIPTADO.style.backgroundImage = "url(recursos/Muñeco.png)";
    MSN_ENCRIPTAR.value = "";
    MSN_ENCRIPTADO.value = "";
    alert(
      "Aun no ha ingresado un mensaje, recuerde que solo se permite ingresar letras minusculas y sin acentos."
    );
  }
}

/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encriptar(mensajeaencriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  /* metodo includes (aqui va lo que estoy buscando), determina si en una matriz hay algun elemento y  devueleve true o false si encuentra lo que busco en la amtriz, ejemplo: variable.includes(hola) */
  /* el metodo replaceall ( x,y) recibe dos parametros x es lo que estoy buscando dentro de la cadena de texto y y seria el valor por que quiero emplazar  */
  mensajeaencriptar = mensajeaencriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (mensajeaencriptar.includes(matrizCodigo[i][0])) {
      mensajeaencriptar = mensajeaencriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return mensajeaencriptar;
}
function desencriptar(mensajeaDesencriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  mensajeaDesencriptar = mensajeaDesencriptar.toLowerCase();
  for (let j = 0; j < matrizCodigo.length; j++) {
    if (mensajeaDesencriptar.includes(matrizCodigo[j][1])) {
      mensajeaDesencriptar = mensajeaDesencriptar.replaceAll(
        matrizCodigo[j][1],
        matrizCodigo[j][0]
      );
    }
  }
  return mensajeaDesencriptar;
}

const btnCopiar = document.querySelector(".btn-copy");
btnCopiar.addEventListener(
  "click",
  (copiar = () => {
    navigator.clipboard.writeText(MSN_ENCRIPTADO.value);
  })
);
