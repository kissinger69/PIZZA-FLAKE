$(document).ready(function() {
var toppingsPrices = { Onion: 10, Bacon: 100, Pineapples: 100, Pepperoni: 200 };
var crustPrices = { crispy: 100, stuffed: 200, glutten_free: 300 };

$.each(toppingsPrices, function (k, v) {
    var option = '<option value="' + k + '">' + k + ' @ ' + v + ' Ksh</option>';
    $("#select-toppings").append(option);
});
$.each(crustPrices, function (k, v) {
    var option = '<option value="' + k + '">' + k + '</option>';
    $("#select-crust").append(option);
});
function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
Pizza.prototype.SizePrice = function () {
    if (this.size === "large") {
        return 900;
    } else if (this.size == "medium") {
        return 500;
    } else {
        return 300;
    }
}
Pizza.prototype.ToppingsPrice = function () {
    if (this.size == "large") {
        return toppingsPrices[this.toppings] * 3;
    } else if (this.size == "medium") {
        return toppingsPrices[this.toppings] * 2;
    } else {
        return toppingsPrices[this.toppings];
    }
}
Pizza.prototype.CrustPrice = function () {
    if (this.crust == "crispy") {
        return 100;
    } else if (this.crust == "stuffed") {
        return 200;
    } else {
        return 300;
    }
}
var pizza1 = new Pizza("large", "crispy", "onion");
console.log(pizza1.size + " " + pizza1.SizePrice() + " helen " + pizza1.ToppingsPrice() + pizza1.CrustPrice() + 200);


$("#btn-add-to-cart").click(function (e) {
    e.preventDefault();
    var size = $("select[name='size']").val();
    var crust = $("select[name='crust']").val();
    var toppings = $("select[name='toppings']").val();
    var quantity = $("input[name='quantity']").val();
    var pizza = new Pizza(size, crust, toppings);
    var sizePrice = pizza.SizePrice();
    var crustPrice = pizza.CrustPrice();
    var toppingPrice = pizza.ToppingsPrice();
    var deliveryCost = 200;
    var total = (sizePrice + crustPrice + toppingPrice) * quantity ;

    var orderItem = "<li>" + quantity + " " + size + " " + 'pizza ,' + "  " + crust + " with " + toppings + " toppings <br> Total Ksh ." + total + "</li>";

    $("#list").append(orderItem);
})
});
$("#deliver").click(function (event) {
    event.preventDefault();
    alert("The delivery cost is Kshs 200 ");

    var blanks = document.getElementById("location").value;
    alert("Your order will include a delivery fee of 200 Ksh and will be delivered to" +" "+blanks);
});
$("#pick").click(function (event) {
    event.preventDefault();
    var blanks = ["name", "phone_number", "location"];
    var input = [];
    blanks.forEach(function (blank) {
        input.push($("#" + blank).val());
    });
    alert("Please pick your order at Pizza Flake opposite Jafferys Sports Club Ground,Nairobi,Kenya");
    $("#pick").reset();
});