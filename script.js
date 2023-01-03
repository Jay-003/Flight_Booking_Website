/*
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */

let contMain = document.querySelector(".container")
let secMain = document.createElement("section")
secMain.className = "flight-info"

// using for loop to access all the flight details from the "flight-data.js".
for (let info in FlightInfo) {
  // creating section
  let sec1 = document.createElement("section")
  sec1.className = "flight-availability-info"

  //creating the city name heading.
  let h1 = document.createElement("h1")
  h1.className = "cityName"

  //creating section to store route info.
  let sec2 = document.createElement("section")
  sec2.className = "routeInfo"

  let p1 = document.createElement("p")
  p1.className = "p1"

  //creating section to store plane details.
  let sec3 = document.createElement("section")
  sec3.className = "planeDetails"

  let li1 = document.createElement("li")
  li1.className = "airline"

  let li2 = document.createElement("li")
  li2.className = "airport"

  let li3 = document.createElement("li")
  li3.className = "details"

  //creating button
  let sec4 = document.createElement("section")
  sec4.className = "buttonSec"

  let button = document.createElement("button")
  button.className = "selectButton"

  //on click event
  button.addEventListener("click", onClick)
  function onClick() {
    let p = document.createElement("p")
    p.className = "addFlight"
    p.innerText = `Flight ${FlightInfo[info].code} to ${FlightInfo[info].destination} added`
    document.querySelector(".flights-selection-bag").appendChild(p)
  }

  //writing content into the webpage
  h1.innerHTML = FlightInfo[info].destination

  //using if condition to print no. of stops.
  if (FlightInfo[info].stops == 0) {
    p1.innerHTML =
      "Non-Stop" +
      ", " +
      FlightInfo[info].time +
      "min" +
      "<br> Depart time: " +
      FlightInfo[info].departTime
  } else {
    p1.innerHTML =
      FlightInfo[info].stops +
      ", " +
      FlightInfo[info].time +
      "min" +
      "<br> Depart time: " +
      FlightInfo[info].departTime
  }

  li1.innerHTML = `Airline: ${FlightInfo[info].airline}`

  li2.innerHTML = `Airport: ${FlightInfo[info].airport}`

  li3.innerHTML = `Details: ${FlightInfo[info].info}`

  button.innerHTML = "Select"

  //appending all the elements created to the main section.
  sec4.appendChild(button)
  li3.appendChild(sec4)
  li2.appendChild(li3)
  li1.appendChild(li2)
  sec3.appendChild(li1)
  p1.append(sec3)
  sec2.appendChild(p1)
  h1.append(sec2)
  sec1.appendChild(h1)
  sec1.appendChild(sec4)
  secMain.appendChild(sec1)
}

//appending the section to the main container in the body.
contMain.appendChild(secMain)
