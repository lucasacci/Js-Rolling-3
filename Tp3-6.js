let x = prompt(`Ingrese una cadena`);
let resultado = '';

if(String(x) == x){
    x = String(x);
}
else{
    alert(`Ingrese una cadena valida`);
}

let cadena = (x) => {

    if(x == x.toUpperCase()) {
        resultado = "Sólo por mayúsculas";
      }
      else if(x == x.toLowerCase()) {
        resultado = "Sólo por minúsculas";
      }
      else {
        resultado = "Por mayúsculas y minúsculas";
      }
    
      return document.write(resultado);
}

    cadena(x);