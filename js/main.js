const buttonSubmit = document.getElementById("submit");
const buttonReset = document.getElementById("reset");
const errorData = document.getElementById("dataError");
const succesData = document.getElementById("succes");

let KM = document.getElementById("KM");
let age = document.getElementById("Age");



const minAge = 0;
const maxAge = 120;
const minKM = 0;
const maxKM = 100;

const underAge = 18;
const overAge = 65;

const kmPrice = 0.21;
const underAgeDiscount = 20;
const overAgeDiscount = 40;
let price = 0;

KM.setAttribute("min",minKM);
age.setAttribute("min",minAge)
KM.setAttribute("max",maxKM);
age.setAttribute("max",maxAge)

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault()
  let kmValue = Number(KM.value);
  let ageValue = Number(age.value);

  console.log("Kilometri:", kmValue);
  console.log("Età:", ageValue);

  if (isNaN(kmValue) || kmValue < minKM || kmValue > maxKM) {
    succesData.classList.add("d-none");
    errorData.classList.remove("d-none");
    errorData.innerHTML =
      errorData.innerHTML = `Il campo dei Chilometri accetta solo numeri da ${minKM} al ${maxKM}.`;
  } else if (isNaN(ageValue) || ageValue < minAge || ageValue > maxAge) {
    succesData.classList.add("d-none");
    errorData.classList.remove("d-none");
    errorData.innerHTML = `Il campo dell'età accetta solo numeri da ${minAge} al ${maxAge}.`;
  } else {
    errorData.classList.add("d-none");
    if (ageValue < underAge) {
      price = kmValue * kmPrice;
      price = price - (price / 100) * underAgeDiscount;
    } else if (ageValue > overAge) {
      price = kmValue * kmPrice;
      price = price - (price / 100) * overAgeDiscount;
    } else {
      price = kmValue * kmPrice;
    }
    succesData.classList.remove("d-none");
    succesData.innerHTML = succesData.innerHTML = `
        <b>Chilometri: <b> ${kmValue} <br>
        <b>Età: <b> ${ageValue} <br>
        <b>Costo Chilometro: <b> ${kmPrice} <br>
        <b>Costo Biglietto: <b> ${price.toFixed(2)} €<br>
        `;
  }
});
