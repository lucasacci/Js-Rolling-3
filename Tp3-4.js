let x = prompt(`Ingrese un numero entero`);

if(Number(x) == x){
    x = Number(x);
}
else{
    alert(`Ingrese un numero valido`);
}


function paridad(){
    if(x % 2 == 0){
        return document.write(`PAR`);
    }
    else{
        return document.write(`IMPAR`);
    }
}

paridad(x);