let x = [];
let y = [];
let z = [];
let d1,d2,s1 = 0;



for (let i = 0; i < 50; i++) {
   
    d1 = Math.floor((Math.random()*(6)+1));
    d2 = Math.floor((Math.random()*(6)+1));
    
    s1 = d1 + d2;
    
    x.push(s1);
    y.push(d1);
    z.push(d2);


    
}
document.write(`Dado 1: ${y}`);
document.write(`<br>`);
document.write(`Dado 2: ${z}`);
document.write(`<br>`);
document.write(`Resultado de sumas: ${x}`);
console.log(x);