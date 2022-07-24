let a = prompt(`Type a number`);
let b = [];

if(Number(a) == a){
    a = Number(a);
}
else{
    alert(`Type a valid number`);
}



let multi = (a) => {

    
    for (let i = 1; i <= 10; i++) {
        
        let x = i*a;
        b.push(x);
    }

    return document.write(b);
}




multi(a);

