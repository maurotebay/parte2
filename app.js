function ejercicio1(){
    var a = 5, b = 4;
    alert("5 + 4 = " + (a+b));
    alert("5 - 4 = " + (a-b));
    alert("5 * 4 = " + (a*b));
    alert("5 / 4 = " + (a/b));
    alert("5++ =" + (a++));
    alert("5-- = " + (a--));
    alert("++5 = " + (++a));
    alert("--5 = " + (--a));
}

function ejercicio3(){
    alert("4563 d\u00edas son: " + (4563/365.25).toFixed(0) + " a\u00F1os.");
}

function ejercicio4(){
    alert("4563 d\u00edas son: " + (4563/365.25).toFixed(0) + " a\u00F1os y " + (4563%365.25) + " d\u00edas.");
}

function ejercicio5(){
    var numero1 = 10;
    var numero2 = 5;
    var resultado1 = ++numero1 + numero2; 
    var resultado2 = numero1 + numero2++;
    console.log(numero1);
    console.log(numero2);
    console.log(resultado1);
    console.log(resultado2);
}

function ejercicio7(){
    var numero1;
    var numero2 = 5;
    alert(numero1 + numero2);
}

function ejercicio8(){
    var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    alert("Mes 5: " + meses[5]);
    alert("Mes 12: " + meses[11]);
}

function ejercicio9(){
    var valores = [true, false, 0, "hola", "adios", 4, 2];
    alert("valores[0]||valores[1] = " + (valores[0]||valores[1]) + "\nvalores[0]&&valores[1] = " + (valores[0]&&valores[1]));
    console.log("valores[5] + valores[6]= " + (valores[5]+valores[6]));
    console.log("valores[5] - valores[6]= " + (valores[5]-valores[6]));
    console.log("valores[5] * valores[6]= " + (valores[5]*valores[6]));
    console.log("valores[5] / valores[6]= " + (valores[5]/valores[6]));
    console.log("valores[5] % valores[6]= " + (valores[5]%valores[6]));
    alert("valores[1]==valores[2]?: " + (valores[1]==valores[2]));
    alert("valores[1]===valores[2]?: " + (valores[1]===valores[2]));
}