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
    if(numero1==''){
       document.getElementById ("numero1").setAttribute("class","form-control is-invalid");
       var parrafo1 = document.getElementById ("parrafo_validar_numero1");
       parrafo1.innerHTML="Debe ingresar número 1";
       parrafo1.setAttribute("class","text-danger");
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
 

}