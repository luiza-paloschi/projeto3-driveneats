let foodsel;
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
   pricefood = (document.querySelector('.food_row .selected .card_price').innerHTML).replace(",", ".");
   pricefood = Number(pricefood.replace('R$ ', ''))
   if (verificar()){
      mudabotão()
   }
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
   pricedrink = (document.querySelector('.drink_row .selected .card_price').innerHTML).replace(",", ".");
   pricedrink = Number(pricedrink.replace('R$ ', ''))
   if (verificar()){
      mudabotão()
   }
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
   pricedessert = (document.querySelector('.dessert_row .selected .card_price').innerHTML).replace(",", ".");
   pricedessert = Number(pricedessert.replace('R$ ', ''))
   if (verificar()){
         mudabotão()
   }
}

function verificar(){
   let foodselecionada = document.querySelector('.food_row .selected');
   let drinkselecionada = document.querySelector('.drink_row .selected');
   let dessertselecionada = document.querySelector('.dessert_row .selected');

   return (foodselecionada!== null) && (drinkselecionada !== null) && (dessertselecionada !== null)
}

function mudabotão(){
   let botão = document.querySelector('.button')
   let texto = document.querySelector('.button p')
   botão.classList.add('finish')
   texto.innerHTML = 'Fechar pedido'
}

function finalizarpedido(){
  if (verificar()){
   let link = document.querySelector('.link')
   let valortotal = (calcularValor(pricefood, pricedrink, pricedessert))
   let mensagem =`Olá, gostaria de fazer o pedido:\n- Prato: ${foodsel}\n- Bebida: ${drinksel}\n- Sobremesa: ${dessertsel}\nTotal: R$ ${valortotal}`;
   mensagem = encodeURIComponent(mensagem)
    let url = 'https://wa.me/5554992066376?text='+ mensagem
    link.setAttribute('href', url)
  }
}

function calcularValor(pricefood, pricedrink, pricedessert){
  let valor = (pricefood + pricedrink + pricedessert).toFixed(2)
  valor = (valor.replace('.', ',')).toString()
  return valor
}
   