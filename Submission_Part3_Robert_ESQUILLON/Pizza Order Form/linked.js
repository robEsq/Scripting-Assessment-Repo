/**
 * @function
 * @name checkQuantity
 * @description This function calculates the number of pizzas inputted by the user
 *  1 pizza     = 6.45
 *  2 pizzas    = 14.00
 *  3 pizzas    = 12.00
 *  4 or more   = combination of the above
 *  This will call everytime the value of the text box is changed
 */
function checkQuantity() {
    const pizzas = document.getElementById("quantity").value;
    let totalCost;

    // First checks if the input is a number and not a negative
    if (!isNaN(pizzas) && pizzas >= 0) {
        
        totalCost = parseInt((pizzas / 3)) * 14;
        if (pizzas % 3 === 2) {
            totalCost = totalCost + 12;
        } else if (pizzas % 3 === 1) {
            totalCost = totalCost + 6.45;
        }
        document.getElementById("calculated_pizzas").innerHTML = "$" + totalCost;
    } else {
        document.getElementById("calculated_pizzas").innerHTML = "Invalid input!";
    }
}