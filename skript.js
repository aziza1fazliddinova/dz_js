let products = [
    {   
        name: "milk",
        type: "milk",
        price: 16000
    },
    {   
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {   
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {   
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {   
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {   
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {   
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {   
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {   
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {   
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]

let total = products.reduce((a,b)=>{
    return a+b.price
},0)

let category = "milk"; 
let categoryNarx = products.reduce((Narx, product) => {
    if (product.type === category) {
        return Narx+ product.price;
    } else {
        return Narx;
    }
}, 0);

let category3 = "alcohol"; 
let categoryNarx3 = products.reduce((Narx3, product) => {
    if (product.type === category3) {
        return Narx3+ product.price;
    } else {
        return Narx3;
    }
}, 0);

let category2 = "meat"; 
let categoryNarx2 = products.reduce((Narx2, product) => {
    if (product.type === category2) {
        return Narx2+ product.price;
    } else {
        return Narx2;
    }
}, 0);

let type = "milk";
let categoryCount = products.filter(product => product.type === type).length;

let type2 = "alcohol";
let categoryCount2 = products.filter(product => product.type === type).length;

let type3= "meat";
let categoryCount3 = products.filter(product => product.type === type).length;

let total2 = products.reduce((a,b)=>{
    return a+b.price
},0)

console.log('Общая сумма всех продуктов'+' '+total);
console.log('Общая сумма молочных продуктов'+' '+categoryNarx);
console.log("Количество молочных продуктов" + " " + categoryCount);
console.log('Общая сумма алкогольных напитков' +' '+categoryNarx3);
console.log("Количество алкогольных напитков" + " " + categoryCount2);
console.log('Общая сумма мясных продуктов' +' '+categoryNarx2);
console.log("Количество мясных продуктов" + " " + categoryCount3);
console.log('Средний прайс всех продуктов'+' ' + total2 / products.length);
