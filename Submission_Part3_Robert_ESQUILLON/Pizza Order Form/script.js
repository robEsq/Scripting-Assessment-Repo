function calculatePizzas() {
    let pizzas = document.getElementById("pizza_count").value;

    if (!isNaN(pizzas) && pizzas >= 0) {
        let totalCost = 0;
        totalCost = parseInt((pizzas / 3)) * 14;
        if (pizzas % 3 === 2) {
            totalCost = totalCost + 12;
        } else if (pizzas % 3 === 1) {
            totalCost = totalCost + 6.45;
        }
        document.getElementById("pizza_price").innerHTML = "$" + totalCost;
    } else {
        document.getElementById("pizza_price").innerHTML = "Invalid input!";
    }
}