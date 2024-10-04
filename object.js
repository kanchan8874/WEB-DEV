const smartphonearray =[
{
    brand: 'oneplus',
    model:'8t',
    price:14999,
    color:['green','blue', 'red']
},

{
    brand: 'apple',
    model:'8t',
    price:79999,
    color:['gray','green', 'red']
},


{
    brand: 'oppo',
    model:'8t',
    price:42999,
    color:['black','blue', 'red']
},

{
    brand: 'xiaomi',
    model:'8t',
    price:19999,
    color:['black','blue', 'red']
},
{
    brand: 'samsung',
    model:'8t',
    price:18999,
    color:['black','blue', 'red']
},
];
console.log(smartphonearray.length);
console.log(smartphonearray[1].price);

//access secend color of second obj
console.log(smartphonearray[2].color[1]);
//replace first color of 4th phone whit silver
console.log(smartphonearray[4].color[0]="silver");


smartphonearray[3].color[0]='silver';
console.log(smartphonearray[3]);
//add  a new color yellow to the 5th  phone
smartphonearray[4].color.push('yellow');
console.log(smartphonearray[4]);

//
const budgetphone = smartphonearray.filter((phone) => {return phone.price > 15000 && phone.price <20000});
console.log(budgetphone);


const brands = smartphonearray.map((phone) => {return phone.brand})
console.log(brands);

//filter all phone having black color;
const blackphone =smartphonearray.filter((phone) => {return phone.color.includes('black')});
console.log(blackphone);


//filter all samsung phone
const samsungPhones = smartphonearray.filter((phone) => { return phone.brand === 'samsung'});
console.log(samsungPhones);

const keyword = 'sa';
const filteredphone = smartphonearray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase())
});
console.log(filteredphone);
