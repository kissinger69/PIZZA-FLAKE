$(document).ready(function() {

    var toppingsPrices={Pepperoni: 200, Onions: 100, Bacon: 100, Pineapple: 100};
    var crustPrices={crispy: 100,stuffed: 200, glutten_free: 300 }

    $.each(toppingsPrices,function(k,v) {
        var option ='<option value="' + k + '">' + k + '@' + v + 'Ksh</option>';
        $("#select-toppings").append(option);
    });

    $.each(crustPrices,function(k,v) {
        var option = '<option value="' + k + '">' + k + '</option>';
        $("#")
    }
}