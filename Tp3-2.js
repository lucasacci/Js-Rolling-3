
let x = [];

do{
    let a = prompt(`Ingrese el nombre de una ciudad`);

    x.push(a);

}while(confirm(`Desea continuar?`));

document.write(`Array = `);

for (let i = 0; i < x.length; i++) {
   document.write(x[i]);
   document.write(" ");
}

document.write(`<br>`);
document.write(`Longitud = ${x.length}`);
document.write(`<br>`);

document.write(`Primera posicion = ${x[0]}, Tercera = ${x[2]}, Ultimo = ${x[x.length-1]}`);
document.write(`<br>`);

x.push(`Paris`);
document.write(`Nuevo ultimo = ${x[x.length-1]}`);
document.write(`<br>`);

document.write(`Segundo elemento = ${x[1]}`);

let s = x.splice(1,1,`Barcelona`);

document.write(`<br>`);
document.write(`Nuevo segundo = ${x[1]}`);
document.write(`<br>`);