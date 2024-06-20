let numeroSecreto = 0;
let intentos = 0
let sorteados = []
let numeroMaximo = 10
function asignarTextoElemento(elemento,texto){
    let ElementoHTML = document.querySelector(elemento);    
    ElementoHTML.innerHTML = texto;
}
function verificarValor(){
    let numeroDeUsuario = document.getElementById('numero_ingresado').value;
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
        limpiarCaja();
        asignarTextoElemento('p', 'El número secreto es menor');
        }else{
        limpiarCaja();
        asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
    }
}
function limpiarCaja(){
    let valorcaja = document.querySelector('#numero_ingresado').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(sorteados)
    if(sorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles :c')
    }else{
        if (sorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            sorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condiciones_iniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function nuevojuego(){
    limpiarCaja();
    condiciones_iniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}
condiciones_iniciales();