// create a class
var Grocery = /** @class */ (function () {
    // add a constructor
    function Grocery(n, t, q, p) {
        this.name = n;
        this.type = t;
        this.quantity = q;
        this.price = p;
        this.price_total = p * q;
    }
    return Grocery;
}());
// create a list of grocery items
// new keyword is used to instantiate objects
var list_of_items = [
    new Grocery("milk", "1 gallon", 3, 5.99),
    new Grocery("bread", "rolls", 6, 1.25),
    new Grocery("egg", "pasture raised", 11, 6.99)
];
// access the html element with id app
var ele = document.getElementById("grocery_list");
// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "".concat(e.name, " : ").concat(e.type, " : ").concat(e.quantity, "  -> $").concat(e.price, " -> $").concat(e.price_total);
    ele.appendChild(p);
});
