let a = prompt(`Ingrese la altura`);
let b = prompt(`Ingrese el ancho`);
let p = 0 ;

if(Number(a) == a && Number(b) == b){
    a = Number(a);
    b = Number(b);
}
else{
    alert(`Ingrese un numero valido`);
}

function perimetro(){

    p = 2*(a + b);

    return document.write(`Perimetro = ${p}`);
}

perimetro();