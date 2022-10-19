// create a class
class Grocery {
    // declare properties and corresponding data type
    name: string;
    type: string;
    quantity: number;
    price: number;
    price_total: number;

    // add a constructor
    constructor(n: string, t: string, q: number, p: number){
        this.name = n;
        this.type = t;
        this.quantity = q;
        this.price = p;  
        this.price_total = p*q;      
    }
}

// create a list of grocery items
// new keyword is used to instantiate objects
let list_of_items = [
    new Grocery("milk", "one gallon", 3, 5.99),
    new Grocery("bread", "rolls",  6, 1.25),
    new Grocery("egg", "pasture raised", 11, 6.99)
]

// access the html element with id app
const ele = document.getElementById("grocery_list");

// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} : ${e.type} : ${e.quantity}   $${e.price} -> $${e.price_total}`;
    ele.appendChild(p);
});