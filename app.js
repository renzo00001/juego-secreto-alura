
/*
let  tituloo= document.querySelector('h1')
tituloo.innerHTML= "Juego del Numero Secreto"
let  parrafo= document.querySelector('p')
parrafo.innerHTML= "indicar un numero de 1 al 10"
*/

/*
let numeroR= 0;

let intentos =0;
let listaNumerosS=[];
let NumeroMax=10;
let intentosMax=0;

function seguirr(){
    alert("funcionaaaa");
}

function asignarTexto(etiqueta,textoo){
    txtHTML= document.querySelector(etiqueta);
    txtHTML.innerHTML= textoo;
}
function numeroAleatorio(){
    let numerogeneradooo =  parseInt(Math.random()*NumeroMax)+1;
        console.log (numerogeneradooo);     
        console.log (listaNumerosS);     

    if (intentosMax == NumeroMax){ // la otra forma  es con este codigo  if (listaNumerosS.length == NumeroMax) donde compara la cantidad del ARRAY con el numero maximo del sorteo
        asignarTexto('p','Ya se sortearon todos los numeros posibles')
    }else{
        if (listaNumerosS.includes(numerogeneradooo)){   // verifica si el  numero generado esta en la lista  y devulve true o false
            return numeroAleatorio();
        } else{
            listaNumerosS.push(numerogeneradooo);  // con este metodo se incluye los numeros generados  la lista ARRAY
            intentosMax++
            return numerogeneradooo;

        }
    }


}
function IngresoUsuario(){
    let valorIngresado = parseInt(document.getElementById('numeroUsuario').value); // funcion para llamar al ID del index.html
    
    if(valorIngresado === numeroR){
        asignarTexto('p',`Acertaste el Numero en ${intentos} ${(intentos == 1)? "vez" : "veces"}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else { 
        if (valorIngresado > numeroR){
            asignarTexto('p',"El numero ingresado es menor")
        } else {
            asignarTexto('p',"El numero ingresado es mayor ")
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';  // se usa para limpiar las cajas donde el usuario ingresa datos

}

function CondicionesInicio(){
asignarTexto('h1','Juego del Numero Secreto');
asignarTexto('p',`indicar un numero de 1 al ${NumeroMax}`);
numeroR= numeroAleatorio();   
console.log(numeroR);
intentos =1
}

function reinicioo(){   //cuando se presiona el boton de NUEVO JUEGO  reinicia toda la pagina como si apretaras F5
    
    CondicionesInicio(); // primero se llama a la funcion inicial para reiniciar todo 
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //otra forma de desabilitar  o habilitar un boton que esta desabilitado en html


}

CondicionesInicio();

*/


/*
function HOLAMM(textooo){
   console.log("¡Hola, mundo! y " + textooo );
   return ;

}
HOLAMM('eduardo');

function numer0o(nnnn){

    console.log(`el doble  del numero ingresado es  ${nnnn*2}` );
    return ;
}
 
numer0o('2');
function promedio(pr1,pr2,pr3){
      sumaa =  parseInt(pr1 + pr2 + pr3);
     let prommm = sumaa/3;
    console.log(`el Promedio es  ${prommm}` );
    
}
 
promedio(2,6,8);
*/

/*
function imcc(peso1,altura1){

    let masaa = peso1/Math.pow(altura1,2);
    console.log(masaa)
}

imcc(89,1.78)

function factorialll(num3){
    let resultado =1;
    let num2=num3
    while(num3>0){
        resultado= resultado* num3
        num3--
    }
    console.log(`el factorial de ${num2} es = ${resultado}`)
}
factorialll(5);

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  */




let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' ,'Python'];

lenguagesDeProgramacion.push('Java','Ruby' ,'GoLang')

function locuras(){
        let max =0
        while(max != lenguagesDeProgramacion.length ){
            console.log(lenguagesDeProgramacion[max]);
            max++
        }
}
console.log(lenguagesDeProgramacion)

locuras();

let numero2= [1,2,3,4,5]

function locu2(){
    let max = 0;
    let sumaaa =0; 
    let promedio =0;
    while(max != numero2.length){
       
       sumaaa =numero2[max]+sumaaa;
       
       max++;
    }
    promedio= sumaaa/numero2.length;
    console.log(promedio);
}
console.log(numero2)
locu2();

