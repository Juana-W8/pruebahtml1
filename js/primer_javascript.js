/*var a=5, nombre= "Pedro";
alert(nombre+" tiene la nota "+a);*/

//var numero1=prompt("Ingrese número 1");
//var numero2=prompt("Ingrese número 2");
//var resultado=parseInt (numero1)+parseInt (numero2);
/*alert ("el resultado de la suma es "+resultado);
*/
//adicionar a la página web el resultado en un h1
/*document.write("<h5 style='text-align: center'> El resultado de la suma es "+resultado+"</h5><br /><br />");

document.write("<h5 class='alinear'> El resultado de la suma es "+resultado+"</h5>");

var resultado2="wq";
var numero4=parseInt(resultado2);
document.write("<h5 class='alinear'> El resultado de la suma es "+numero4+"</h5><br /><br />")*/

//arreglos para mostrar varios datos
var materias =["química", "física", 8, true, "matemáticas"];

//agregar valores al arreglo

materias[materias.length]="español";

materias.push("EF","Idiomas");

//borrar el último valor del arreglo, hay que borrarlo en la escritura también

materias.pop();

document.write ("<div class='caja_materias'>");
document.write("<p>"+materias[0]+"</p>");
document.write("<p>"+materias[1]+"</p>");
document.write("<p>"+materias[2]+"</p>");
document.write("<p>"+materias[3]+"</p>");
document.write("<p>"+materias[4]+"</p>");
document.write("<p>"+materias[5]+"</p>");
document.write("<p>"+materias[6]+"</p>");
document.write("<p>"+materias[7]+"</p>");
document.write("</div>");
document.write("<p class= 'alinear'>"+materias.join(' ')+"</p>");
document.write("<p class= 'alinear'>"+materias.sort ()+"</p>");

document.write ("<p class='fs-1 alinear'>.fs-1 text</p>");

/*var edad=(prompt("Ingrese edad"));
if(edad<18){
    alert("es menor de edad");

}
else if(edad===18){
    alert("debe sacar cédula");
}
else if(edad>70){
    alert("es tercera edad");
}
else{
    alert("es mayor de edad");
}
*/

var i;
//ejercicio for
for (i=1; 1<=10;i++){
    document.write("<p class='fs-5 text-center'> la i va en "+i+"</p>");
}

//ejercicio while

var j=3
while(j<=9){
    document.write("<p class='fs-5 text-center'> la j va en "+j+"</p>");
    //j=j+1
    j++;
}

//do-while
var k=9;
do{
    k++;
    document.ownerDocument("<p class='fs-5 text-center'> la k va en "+k+"</p>");
}while (k<=12);