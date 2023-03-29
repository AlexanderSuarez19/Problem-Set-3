var Pizza = /** @class */ (function () {
    //Constructor function that will initialize our atributes
    function Pizza(size, extraCheese, numPepperoni, numHam, numPineapple) {
        this._size = size;
        this._extraCheese = extraCheese;
        this._numPepperoni = numPepperoni;
        this._numHam = numHam;
        this._numPineapple = numPineapple;
    }
    Object.defineProperty(Pizza.prototype, "size", {
        //Getters and Setters of the attributes.
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "extraCheese", {
        get: function () {
            return this._extraCheese;
        },
        set: function (extraCheese) {
            this._extraCheese = extraCheese;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "numPepperoni", {
        get: function () {
            return this._numPepperoni;
        },
        set: function (numPepperoni) {
            this._numPepperoni = numPepperoni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "numHam", {
        get: function () {
            return this._numHam;
        },
        set: function (numHam) {
            this._numHam = numHam;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "numPineapple", {
        get: function () {
            return this._numPineapple;
        },
        set: function (numPineapple) {
            this._numPineapple = numPineapple;
        },
        enumerable: false,
        configurable: true
    });
    //Function to calculate the cost of the pizza
    Pizza.prototype.genCost = function () {
        var cost = 0; //Variable that will count the total cost starting in 0
        switch (this._size) { //Switch statement that will evaluate the size of the pizza.
            case "sm": //In case the pizza is small
                cost += 10; //The initial cost will be 10
                cost += 2 * (this._numPepperoni + this._numHam + this._numPineapple); //And add 2 to the cost count for each extra topping
                if (this._extraCheese) { //If the pizza has extra cheese (true value)
                    cost += 2; //Add to the count 2 
                }
                break;
            case "md": //In case the pizza is medium
                cost += 12; //The initial cost will be 12
                cost += 2 * (this._numPepperoni + this._numHam + this._numPineapple); //And add 2 to the cost count for each extra topping
                if (this._extraCheese) { //If the pizza has extra cheese (true value)
                    cost += 4; //Add to the count 4 
                }
                break;
            case "lg": //In case the pizza is large
                cost += 14; //The initial cost will be 14
                cost += 3 * (this._numPepperoni + this._numHam + this._numPineapple); //And add 2 to the cost count for each extra topping
                if (this._extraCheese) { //If the pizza has extra cheese (true value)
                    cost += 6; //Add to the count 6
                }
                break;
            case "xl": //In case the pizza is extra large
                cost += 18; //The initial cost will be 18
                cost += 4 * (this._numPepperoni + this._numHam + this._numPineapple); //And add 2 to the cost count for each extra topping
                if (this._extraCheese) { //If the pizza has extra cheese (true value)
                    cost += 6; //Add to the count 6
                }
                break;
            default: //In case the size isn't any of the above
                console.log("Invalid size"); //Log "Invalid state", but this case wont likely happen because of the type defined at the beginning.
                break;
        }
        return cost; //At the end, return the total cost of the pizza.
    };
    return Pizza;
}());
var myPizza = new Pizza("xl", true, 2, 1, 1); //Creation of a pizza object of xl size, with extra cheese and 2 pieces of pepperoni, 1 piece of ham and 1 piece of pineapple
console.log(myPizza.genCost()); // Function to calculate the cost of that pizza. Output: 40
var poorPizza = new Pizza("sm", false, 0, 0, 0); //Creation of a pizza object of sm size, with no extra cheese and 0 pieces of pepperoni,ham and pineapple.
console.log(poorPizza.genCost()); // Function to calculate the cost of that pizza. Output: 10
