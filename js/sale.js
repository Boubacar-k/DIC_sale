// const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const idElement = document.getElementById("product");
let purchases = [];

function product(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
}

const products = [new product(1,"Mélange original 200g 500 yens",500),
new product(2,"Mélange original 500g 900 yens",900),
new product(3,"Mélange spécial 200g 700 yens",700),
new product(4,"Mélange spécial 500g 1200 yens",1200)];


function add(){
    let id = parseInt(idElement.value);
    let purchase={};

    const number = parseInt(numberElement.value);

    products.forEach((i)=>{
        if(id == i.id){
            purchase = {
                price: i.price,
                number: number,
                name: i.name,
            };
            return purchase;
        }
    })

    // let newPurchase = true;

    // purchases.forEach((item) => {
    //     if(item.price === purchase.price) {
    //         newPurchase = false;
    //     }
    // })

    // if(purchases.length < 1 || newPurchase) {
    //     purchases.push(purchase);
    // } else {
    //     for(let i = 0; i < purchases.length; i++) {
    //         if(purchases[i].price === purchase.price) {
    //             purchases[i].number += purchase.number;
    //         }
    //     }
    // }

    let newPurchase = purchases.findIndex((i)=> i.price === purchase.price);
    if(purchases.length < 1 || newPurchase === -1){
        purchases.push(purchase);
    }else{
        purchases[newPurchase].number += purchase.number;
    }

    window.alert(`${display()}\ntotal: ${subtotal()} yens`);
}

function display() {
    return purchases.map(purchase =>{return `${purchase.name}\nprice: ${purchase.price} yens ${purchase.number} items`;}).join("\n");
}

function display2() {
    return purchases.map(purchase =>{return `${purchase.name}\n${purchase.number} items`;}).join("\n");
}

function subtotal(){
    return purchases.reduce((prev,purchase)=>{
        return prev + purchase.price * purchase.number;
    },0)
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(display2()+"\ntotal: "+subtotal()+" yens\nShipping costs: "+postage +" yens.\nSubtotal: "+(sum + postage)+" yens");
    purchases = [];
    idElement.value= "";
    numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum < 2000){
     return 500;
    } else {
     return 250;
    }
  }

