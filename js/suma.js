function sumar(){
    //alert("entró la función");
    var numero1=document.getElementById("numero1").value;
    var numero2= document.getElementById("numero2").value;
   // alert("en número 1 se ingresó el valor "+numero1);
    //alert("en número 2 se ingresó el valor "+numero2);
    var resultado = parseInt(numero1)+ parseInt(numero2);
    alert("el resultado es "+resultado);
}

/*var nombre="pedro";
alert("convertir a mayúscula "+ nombre.toUpperCase());
alert("convertir a minúscula "+ nombre.toLowerCase());
alert("posición 2: "+ nombre.charAt(2));
alert("encontrar letra: "+nombre.indexOf('d'));*/

var parrafo1=document.getElementsByTagName("p");
parrafo1[2].innerHTML="se cambió el párrafo";