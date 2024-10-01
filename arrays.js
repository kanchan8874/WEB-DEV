const arr =['hello', 345, true];
console.log(typeof arr);
console.log(Array.isArray(arr));
const movies=['stree' , 'salar','spiderman' ,'and' ,'or'];
console.log(movies.length);//also work with string 


//indexing
console.log(movies[2]);//also work with string 
console.log(movies.indexOf('spiderman'));//also work with string 
console.log(movies[-2]);
console.log(movies.at(-2));
movies[2]='james bond'
console.log(movies);

//slicing ........
console.log(movies.slice(1,4));//also work with string 
console.log(movies.slice(2));
console.log(movies.slice(-3));

//adding and removing elements...
movies.push('brahmn'); //also work with string //adding starting 
movies.unshift('superman'); //also work with string //adding ending
console.log(movies);

//removing from end 
movies.pop();  
movies.shift();//remove from beginnig
console.log(movies);

movies.splice(2,0,'flash','arrow','shadow and bone'); //index 2 se 2 element remove krna.
console.log(movies);

