
let res;
const countryedata = async () => {
  const get = await fetch('https://restcountries.com/v3.1/all')
  const data = await get.json();
  console.log(data[1])
  res = data
  let nav = document.createElement("div")
  nav.innerHTML = `<nav class="bg-primary">
  <div class="container-fluid">
  <p class="h1 text-center" style="color: white ">Country Details</p>
  </div>
  </nav>`
  let div0 = document.createElement("div")
  div0.className = "row d-flex justify-content-center"
  document.body.append(nav)
  document.body.append(div0)
  data.forEach(data => {
    let division = document.createElement("div")
    division.className = "card col-lg-4 col-sm-12 text-center m-4 bg-warning"
    division.innerHTML = `<div class="card-header bg-dark text-light">${data.name.common}</div> <img class = "p-5" imgs src="${data.flags.png}" alt="flag">`
    div0.appendChild(division)
    let div1 = document.createElement("div")
    div1.className = "card-body text-light"
    div1.innerHTML = `<h5 id="cap">Capital: ${data.capital}</h5><h5>Region: ${data.region}</h5><h5>CountryCode: ${data.cca2}</h5>`
    division.appendChild(div1)
   
     

   
  })
}


document.addEventListener('DOMContentLoaded', countryedata)
