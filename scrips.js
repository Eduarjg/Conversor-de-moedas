const convertButton = document.querySelector(".convertButton")
const currencyselect = document.querySelector(".currency-select")


function converteValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConverte = document.querySelector(".currency-value-to-convert")
   const currencyValueConverte = document.querySelector(".currency-value")

   const dolarToday = 5.2
   const euroToday = 6.2
   const dolarconvert = inputCurrencyValue / dolarToday
   const euroconvert = inputCurrencyValue / euroToday

   if (currencyselect.value == "dolar") {
      currencyValueConverte.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(dolarconvert)


   }


   if (currencyselect.value == "euro") {

      currencyValueConverte.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"

      }).format(euroconvert)

   }



   currencyValueToConverte.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)

}

function changeCurrency() {
   const currencyName = document.getElementById("currency-names")
   const currencyImg = document.querySelector(".currency-img")

   if (currencyselect.value == "dolar") {
      currencyName.innerHTML = "Dolar Americano"
      currencyImg.src = './assets/estados-unidos (1) 1.png'
   }

   if (currencyselect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImg.src = './assets/Europa.png'
   }


   converteValues()

}

currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", converteValues)