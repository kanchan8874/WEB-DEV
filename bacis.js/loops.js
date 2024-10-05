//for -loops(loop defind hota hai), do-while loops  while-loop(nahi pta kitni baar loop chlega)

//for loop
for( let i=0; i<10; i++){
    console.log(i);
  
}
console.log('-------------------')
//while loop
let a=10;
while(a<20){    
console.log(a);
a+=2;
}

console.log('--------------' )

//print all even number from 100 to 200.....
for(let i=100; i<=200; i++){
    if(i%2==0){
        console.log(i);
    }
}
//smalldevvtool.........html to pdf converter....

//wap to check if a no is prime or not
const num =10;
let prime =true;

for(let i=2; i<num; i++){
    if(num % i === 0){
        console.log('not prime');
        prime = false;
        break;

    }
}
if(prime)console.log('prime')

    