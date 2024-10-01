//wap a factorial....
let [a,b]= [0,1];
console.log(a);
console.log(b);
for(let i=0; i<8; i++){
    let c =a+b;
    console.log(c);
    [a,b]=[b,c];

}

//wap to print perfect squre 
//let n=234;
//let squre=n**0.5;
//if(Number.isInteger(squre)){
    //console.log("perfect square")
//}
//wap to print all perfect squares in range of 50 to 1000
for(let i= 50; i<=1000; i++){
    let sqrt =i**0.5;
    if (Number.isInteger(sqrt)){
        console.log(i);
    }

}
//wap to print all prime no in range of 50 to 1000;




