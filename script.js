let foodsel 
let drinksel;
let dessertsel;
let pricefood;
let pricedrink;
let pricedessert;


   function criarícone(id){
   let eldiv = document.createElement('div');
   eldiv.className = 'icon'
   eldiv.id = id
   eldiv.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>'

   return eldiv
}

function selectFood(food){
   let foodselbefore = document.querySelector('.food_row .selected');
   
   if (foodselbefore !== null){
      foodselbefore.classList.remove('selected');
      let remove_icon = document.getElementById("ícone");
      remove_icon.parentNode.removeChild(remove_icon)
   }
   food.classList.add('selected');
   let divIcon = criarícone('ícone')
   food.appendChild(divIcon)
   foodsel = document.querySelector('.food_row .selected .card_title').innerHTML;

}


function selectDrink(drink){
   
   let drinkselbefore = document.querySelector('.drink_row .selected');
   if (drinkselbefore !== null){
      drinkselbefore.classList.remove('selected');
      let remove_icon = document.getElementById("ícone1");
      remove_icon.parentNode.removeChild(remove_icon)
   }
   drink.classList.add('selected');
   let divIcon = criarícone('ícone1')
   drink.appendChild(divIcon)
   drinksel = document.querySelector('.drink_row .selected .card_title').innerHTML;

}

function selectDessert(dessert){
   let dessertselbefore = document.querySelector('.dessert_row .selected');
   if (dessertselbefore !== null){
        dessertselbefore.classList.remove('selected');
        let remove_icon = document.getElementById("ícone2");
        remove_icon.parentNode.removeChild(remove_icon)
   }
   dessert.classList.add('selected');
   let divIcon = criarícone('ícone2')
   dessert.appendChild(divIcon)
   dessertsel = document.querySelector('.dessert_row .selected .card_title').innerHTML;
}


