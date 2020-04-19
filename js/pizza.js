var pizzaStartPrice=300;
var deliveryPrice=0;
var deliverySelected=false;

document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("submit").addEventListener("click",function(event) {
        event.preventDefault()
    })
})

   var pizzaSizes=document.getElementById("sizes");
   var pizzaCrusts=document.getElementById("crusts");
   var pizzaToppings=document.getElementById("toppingstypes");

   var sizes=["small", "medium", "large"];
   var crusts=["crispy", "stuffed", "glutten-free"];
   var toppingstypes=["Pepperoni", "Bacon", "Onions", "Pineapples"];

   var crustStartPrice=50;
   var toppingsStartPrice=100;

   for(var i=0;i<sizes.length;i++) {
       var size=sizes[i];
       var el=document.createElement("option");
       el.textContent=size;
       el.value=i;
       pizzaSizes.appendChild(el);
   }
   for(var i=0;i<crusts.length;i++) {
       var crust=crusts[i];
       var el=document.createElement("option");
       el.textContent=crust;
       el.value=crustStartPrice;
       pizzaCrusts.appendChild(el);
   }
   for(var i=0;i<toppingstypes.length;i++) {
       var topping=toppingstypes[i];
       var el=document.createElement("option");
       el.textContent=topping;
       el.value=toppingsStartPrice;
       pizzaToppings.appendChild(el);
   }
   

   $('input[type=radio]').click(function() {
       var deliveryAddressHolder = document.getElementById("deliveryAddressHolder")
       if(this.id="deliveryselected")
         if(this.value==="yes") {
             deliveryPrice=200
             deliveryAddressHolder.style.visibility='visible'
             yesDelivery=true;
             alert("Delivery charge" + deliveryPrice);

         }else {
             deliveryPrice=0
             deliveryAddressHolder.style.visibility="hidden"
             yesDelivery=false;
         }
   });

   $("#checkout").click(function(event) {
       event.preventDefault();
       $("#checkout").hide();
       $("#fullOrder").fadeIn();
       $('#selectedSizeTd').html($("#sizes option:selected").text());
       $("#selectedCrusts").html($("#crusts option:selected").text());
       $("#selectedToppings").html($("#toppingstypes option:selected").text());
       $("#number").html($("#numberOfPizzas").val());
       $("#total").html($("#totalPrice").val());
   });

   function submitData () {
      var selectedPizzaSize=parseInt(document.getElementById("sizes").value);
      var selectedSize=$("#sizes option:selected").text();
      var selectedCrustsPrice=parseInt(document.getElementById("crusts").value);
      var selectedCrust=$("#crusts option:selected").text();
      var selectedToppingPrice=parseInt(document.getElementById("toppingstypes").value);
      var selectedTopping=$("#toppingstypes option:selected").text();
      var numberOfPizzas=parseInt(document.getElementById("numberOfPizzas").value);
      var deliveryAddress=document.getElementById("deliveryAddress").value;
      var pizzaPrice=0;

      if(selectedPizzaSize===0) {
          selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice,10)
          selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,10)
          pizzaPrice=pizzaStartPrice + increasePrice(pizzaStartPrice,10) + selectedCrustsPrice + selectedToppingPrice
      }else if(selectedPizzaSize===1) {
        selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice,15)
        selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,15)
        pizzaPrice=pizzaStartPrice + increasePrice(pizzaStartPrice,15) + selectedCrustsPrice + selectedToppingPrice
      }else if (selectedPizzaSize===1) {
         selectedCrustsPrice=selectedCrustsPrice + increasePrice(selectedCrustsPrice,15)
         selectedToppingPrice=selectedToppingPrice + increasePrice(selectedToppingPrice,15)
         pizzaPrice=pizzaStartPrice + increasePrice(pizzaStartPrice,15) + selectedCrustsPrice + selectedToppingPrice

