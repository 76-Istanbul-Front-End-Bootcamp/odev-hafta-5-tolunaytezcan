import data from "./data.js"
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity")
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", () => {
  const biggerThan500k = data.filter(city => city.population > 500000)
  createTableElements(biggerThan500k, "allcities")
})

document.querySelector("#landAreaLess").addEventListener("click", () => {
  const lessThan1000 = data.filter(elements => elements.landArea < 1000)
  createTableElements(lessThan1000, "allcities");
})

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const isPopulationLess = data.some((city) => city.population < 100000);
  isPopulationLess ? alert("Yes") : alert("No");
});

document.querySelector("#isLandBigger").addEventListener("click", () => {
  const isLandArea = data.every((city) => city.landArea > 100);
  isLandArea ? alert("Yes") : alert("No");
});

const allCities = data.map(c => c.name);
const citySelect = document.querySelector("#inputGroupSelect01")
for (let i = 0; i <= citySelect.length; i++) {
  let beforeOptions = document.querySelector("option[value]")
  citySelect.removeChild(beforeOptions)
}

allCities.forEach((element) => {
  let cityOption = document.createElement("option");
  cityOption.setAttribute("value", element);
  cityOption.innerHTML = element;
  citySelect.appendChild(cityOption);

})

citySelect.addEventListener("change", (e) => {
  let selectedCity = data.filter(element => e.target.value === element.name)
  createTableElements(selectedCity, "singlecity")
})