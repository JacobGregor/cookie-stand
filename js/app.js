'use strict'


// Create constructor function to replace object literals //
function Restaurant(name,minCustomer,maxCustomer,avg) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avg = avg;
}
// New Objects for each city //
let seattle = new Restaurant('Sattle',23,65,6.3)
let tokyo = new Restaurant('Tokyo',3,22,1.2)
let dubai = new Restaurant('Dubai',11,38,3.7)
let paris = new Restaurant('Paris',20,38,2.3)
let lima = new Restaurant('Lima',2,16,4.6)



//Objects
// const seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
  // avg: 6.3,
//   cookiePerHourArray: [],
//   // Function to generate random Customer/Hour
//   calcCustomerHour: function (){
//     return getMinMax(this.minCustomer,this.maxCustomer);
//   },
//   //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
//   calcCookieHourAvg: function () {
//     return this.calcCustomerHour() * this.avg
//   },
//   //Function that loops 13 times generating a variable Hour which = startHour variable (6) and adds our Index value + either 'am' or 'pm' depending on the if(peramiter). On each iteration we generate a cookies sold per hour value based on our object value of (this.calcCookieHourAvg()) which is a function that runs calcCustomerHour() and multiples the value by our this.avg (which is our objects avg cookies sold per customer value). Our loop then generates an empty hourObject {}; and fills this object with 'Hour + 'am'/'pm' and a cookiePerHourAvg number. we then push this data into our empty object array above named cookiePerHourArray []. 
//   cookieHourlySales: function () {
//     let startHour = 6
//     for(let i = 0; i < 14; i++) {
//       let hour = startHour + i;
//       if (hour < 12) {
//         hour = hour + 'am';
//       } else if (hour === 12) {
//         hour = hour + 'pm'
//       } else if (hour > 12) {
//         hour = (hour - 12) + 'pm';
//       } 
//       let cookiesSold = Math.round(this.calcCookieHourAvg())
//       let hourObject = {};
//       hourObject[hour] = cookiesSold //////////////////////////// Whats going on here. Ask Jonathan.///////////////////
//       this.cookiePerHourArray.push(hourObject);
//     }
//   }
// };
// const tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avg: 1.2,
//   cookiePerHourArray: [],
//   calcCustomerHour: function (){
//     return getMinMax(this.minCustomer,this.maxCustomer);
//   },
//   //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
//   calcCookieHourAvg: function () {
//     return this.calcCustomerHour() * this.avg
//   },
//   cookieHourlySales: function () {
//     let startHour = 6
//     for(let i = 0; i < 14; i++) {
//       let hour = startHour + i;
//       if (hour < 12) {
//         hour = hour + 'am';
//       } else if (hour === 12) {
//         hour = hour + 'pm'
//       } else if (hour > 12) {
//         hour = (hour - 12) + 'pm';
//       } 
//       let cookiesSold = Math.round(this.calcCookieHourAvg())
//       let hourObject = {};
//       hourObject[hour] = cookiesSold
//       this.cookiePerHourArray.push(hourObject);
//     }
//   }
// };
// const dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avg: 3.7,
//   cookiePerHourArray: [],
//   calcCustomerHour: function (){
//     return getMinMax(this.minCustomer,this.maxCustomer);
//   },
//   //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
//   calcCookieHourAvg: function () {
//     return this.calcCustomerHour() * this.avg
//   },
//   cookieHourlySales: function () {
//     let startHour = 6
//     for(let i = 0; i < 14; i++) {
//       let hour = startHour + i;
//       if (hour < 12) {
//         hour = hour + 'am';
//       } else if (hour === 12) {
//         hour = hour + 'pm'
//       } else if (hour > 12) {
//         hour = (hour - 12) + 'pm';
//       } 
//       let cookiesSold = Math.round(this.calcCookieHourAvg())
//       let hourObject = {};
//       hourObject[hour] = cookiesSold
//       this.cookiePerHourArray.push(hourObject);
//     }
//   }
// };
// const paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avg: 2.3,
//   cookiePerHourArray: [],
//   calcCustomerHour: function (){
//     return getMinMax(this.minCustomer,this.maxCustomer);
//   },
//   //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
//   calcCookieHourAvg: function () {
//     return this.calcCustomerHour() * this.avg
//   },
//   cookieHourlySales: function () {
//     let startHour = 6
//     for(let i = 0; i < 14; i++) {
//       let hour = startHour + i;
//       if (hour < 12) {
//         hour = hour + 'am';
//       } else if (hour === 12) {
//         hour = hour + 'pm'
//       } else if (hour > 12) {
//         hour = (hour - 12) + 'pm';
//       } 
//       let cookiesSold = Math.round(this.calcCookieHourAvg())
//       let hourObject = {};
//       hourObject[hour] = cookiesSold
//       this.cookiePerHourArray.push(hourObject);
//     }
//   }
// };
// const lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avg: 4.6,
//   cookiePerHourArray: [],
//   calcCustomerHour: function (){
//     return getMinMax(this.minCustomer,this.maxCustomer);
//   },
//   //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
//   calcCookieHourAvg: function () {
//     return this.calcCustomerHour() * this.avg
//   },
//   cookieHourlySales: function () {
//     let startHour = 6
//     for(let i = 0; i < 14; i++) {
//       let hour = startHour + i;
//       if (hour < 12) {
//         hour = hour + 'am';
//       } else if (hour === 12) {
//         hour = hour + 'pm'
//       } else if (hour > 12) {
//         hour = (hour - 12) + 'pm';
//       } 
//       let cookiesSold = Math.ceil(this.calcCookieHourAvg())
//       let hourObject = {};
//       hourObject[hour] = cookiesSold
//       this.cookiePerHourArray.push(hourObject);
//     }
//   }
// };


// //Function to Generate Random Customer count.
// function getMinMax(minCustomer,maxCustomer) {
//   minCustomer = Math.ceil(minCustomer)
//   maxCustomer = Math.floor(maxCustomer)
//   return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
// }
// function renderCity (city) {
//   //create article
//   const articleEl = document.createElement('article')
//   let cityDiv = document.getElementById('city');
//   cityDiv.appendChild(articleEl);
  
//   const h2El = document.createElement('h2');
//   h2El.textContent = city.name;
//   articleEl.appendChild(h2El);

//   const ulEl = document.createElement('ul');
//   articleEl.appendChild(ulEl);
//   let sum = 0
//   for(let i = 0; i < city.cookiePerHourArray.length; i++) {
//     let currentHour = city.cookiePerHourArray[i];
//     const liEl = document.createElement('li');
//     let key = Object.keys(city.cookiePerHourArray[i])[0]; 
//     let num = city.cookiePerHourArray[i][key]
//     sum += num
//     liEl.textContent = `${key}:  ${num} cookies`;
//     ulEl.appendChild(liEl);
//   }
//     const liElsum = document.createElement('li');
//     liElsum.textContent = `Total: ${sum} cookies`;
//     ulEl.appendChild(liElsum);
//   }
//   function generateCities (city){
//     city.cookieHourlySales();
//     city.calcCustomerHour();
//     city.calcCookieHourAvg();
//   }
  
  // generateCities(seattle);
  // generateCities(tokyo)
  // generateCities(dubai)
  // generateCities(paris)
  // generateCities(lima)


  // renderCity(seattle)
  // renderCity(tokyo)
  // renderCity(dubai)
  // renderCity(paris)
  // renderCity(lima)





