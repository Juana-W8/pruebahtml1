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

//var parrafo1=document.getElementsByTagName("p");
//parrafo1[2].innerHTML="se cambió el párrafo";

function realizar_operaciones_matematicas(){

    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var datos_completos=true;

    if(numero1==''){
       document.getElementById ("numero1").setAttribute("class","form-control is-invalid");
       var parrafo1 = document.getElementById ("parrafo_validar_numero1");
       parrafo1.innerHTML="Debe ingresar número 1";
       parrafo1.setAttribute("class","text-danger");
       var datos_completos=false;

    }else{
        document.getElementById ("numero1").setAttribute("class","form-control is-valid"); 
        var parrafo1 = document.getElementById ("parrafo_validar_numero1");
        parrafo1.innerHTML="";

    }

    if(numero2==''){
        document.getElementById ("numero2").setAttribute("class","form-control is-invalid");
        var parrafo2 = document.getElementById ("parrafo_validar_numero2");
        parrafo2.innerHTML="Debe ingresar número 2";
        parrafo2.setAttribute("class","text-danger");

    }else{
        document.getElementById ("numero2").setAttribute("class","form-control is-valid"); 
        var parrafo2 = document.getElementById ("parrafo_validar_numero2");
        parrafo2.innerHTML="";
    }

    if ((numero1!='')&&(numero2!='')){

        document.getElementById("btnSumar").setAttribute ("class", "btn btn-info boton-formulario");
        document.getElementById("btnSumar").setAttribute ("disabled","");
        document.getElementById("btnCancelar").setAttribute ("class", "btn btn-info boton-formulario");

        multiplicar(numero1,numero2);
        restar(numero1,numero2);
        sumar(numero1, numero2);
    }
    

    function multiplicar(numero1, numero2){


        var multiplicar_valor=numero1*numero2;

        var caja_multiplicar = document.getElementById("div_multiplicar");
        caja_multiplicar.innerHTML="La multiplicación es " +multiplicar_valor;


    }
    function restar(numero1, numero2){
        var restar_valor=numero1-numero2;
        
        var caja_restar = document.getElementById("div_restar");
        caja_restar.innerHTML="La resta es " +restar_valor;
    }
    
    function sumar(numero1, numero2){
        var sumar_valor=parseInt(numero1)+parseInt(numero2);
    
        var caja_sumar = document.getElementById("div_sumar");
        caja_sumar.innerHTML="La suma es " +sumar_valor;

    }
}
/*Código para crear una etiqueta h1 dentro de un div del html*/
var elemento_crear = document.createElement("h1");

var texto_h1 = document.createTextNode("texto para el h1");
elemento_crear.appendChild(texto_h1);
elemento_crear.setAttribute("class", "text-success caja_materias");

var buscar_caja_h1 = document.getElementById ("caja-crear-etiquetas");

buscar_caja_h1.appendChild(elemento_crear);