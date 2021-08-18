'use strict'


function Restaurant(name,minCustomer,maxCustomer,avg,avgCookiesPerHourArray) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avg = avg;
  this.avgCookiesPerHourArray = avgCookiesPerHourArray 
  this.hoursOfOperation = [' White space ',' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm ']
  Restaurant.restaurantArray.push(this)
}
  Restaurant.restaurantArray = [];
  
  // New Objects for each city //
  let seattle = new Restaurant('Seattle',23,65,6.3,[])
  let tokyo = new Restaurant('Tokyo',3,22,1.2,[])
  let dubai = new Restaurant('Dubai',11,38,3.7,[])
  let paris = new Restaurant('Paris',20,38,2.3,[])
  let lima = new Restaurant('Lima',2,16,4.6,[])

//Function to Generate Random Customer count//
Restaurant.prototype._cookiesPerHour = function() {
  let minCustomer = Math.ceil(this.minCustomer);
  let maxCustomer = Math.floor(this.maxCustomer);
  let avgCookiePerHour = (Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer)) * this.avg;
  let roundedCookiePerHour = Math.ceil(avgCookiePerHour)
  return roundedCookiePerHour
}
//Prototype that generates cookie per/hr sales array//
Restaurant.prototype._generateCookieSalesArray = function() {
  let hoursOfOperation = this.hoursOfOperation
  for(let i = 0; i < hoursOfOperation.length -1; i++) {
      let cookiesPerHour = this._cookiesPerHour()
      this.avgCookiesPerHourArray.push(cookiesPerHour)
  }
}
console.log('38')
//Prototype that renders totals//
Restaurant.prototype._renderTotals = function() {

  let total = 0
  for(let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
    total += this.avgCookiesPerHourArray[i];
  }
};
  // Function to create location w/ data//
Restaurant.prototype._renderPlace = function() {
  
  //create body of table
  const trElCities = document.createElement('tr');
  let tbodyEl = document.getElementById('data')
  tbodyEl.appendChild(trElCities);
  
  const thElCities = document.createElement('th')
  trElCities.id="citiesData"
  thElCities.textContent = this.name;
  trElCities.appendChild(thElCities);
  
  for(let i = 0; i < this.hoursOfOperation.length; i++){
    //create hoursOfOperation Row  
    let trElHours = document.getElementById('hoursData')
    const thElHours = document.createElement('th')
    thElHours.textContent = this.hoursOfOperation[i];
    trElHours.appendChild(thElHours);
    const tdElSales = document.createElement('td')
    tdElSales.textContent = this.avgCookiesPerHourArray[i];
    trElCities.appendChild(tdElSales)
  }
}
console.log('67')
  function renderTable() {
     //Create Article//

     const articleEl = document.createElement('article');
     let cityDiv = document.getElementById('city');
     cityDiv.appendChild(articleEl);

     //Create Table//  
     const tableEl = document.createElement('table');
     articleEl.appendChild(tableEl);
     
     //Creates Table Head//
     const tableHeadEl = document.createElement('thead')
     tableEl.appendChild(tableHeadEl);
     
     //Create Table Row//
     const trElHours = document.createElement('tr');
     trElHours.id = 'hoursData'
     tableHeadEl.appendChild(trElHours);
   
     // create body//
     const tbodyEl = document.createElement('tbody')
     tbodyEl.id='data'
     tableEl.appendChild(tbodyEl)
    
  }

console.log('test')
  renderTable();
  seattle._cookiesPerHour()
  seattle._generateCookieSalesArray()
  seattle._renderTotals()
  seattle._renderPlace()
  
  tokyo._cookiesPerHour()
  tokyo._generateCookieSalesArray()
  tokyo._renderTotals()
  tokyo._renderPlace()

  dubai._cookiesPerHour()
  dubai._generateCookieSalesArray()
  dubai._renderTotals()
  dubai._renderPlace()

  paris._cookiesPerHour()
  paris._generateCookieSalesArray()
  paris._renderTotals()
  paris._renderPlace()

  lima._cookiesPerHour()
  lima._generateCookieSalesArray()
  lima._renderTotals()
  lima._renderPlace()

 
  
  






  //   const thElCities = document.createElement('th')
  //   thElCities.textContent = this.name;
  //   trElCities.appendChild(thElCities);
  //   console.log(thElCities)
  // }; 

  
  // for(let i = 0; i < Restaurant.restaurantArray.length[i]; i++) {
  //   const thElCities = document.createElement('th')
  //   thElCities.textContent = this.restaurantArray[0];
  //   trElCities.appendChild(thElCities);
  //   console.log(thElCities)
  
  // //create city row for each iteration//
  // for (let i = 0; i < Restaurant.restaurantArray.length[i]; i++){
  // }




  /////////////////Delete this later/////////////////////  
  //posts time and cookie totals/////////
    // const liEl = document.createElement('li')
    // liEl.textContent = `${this.hoursOfOperation[i]} ${this.avgCookiesPerHourArray[i]} cookies`
    // ulEl.appendChild(liEl);

  //Generates Hours of Operation to table//  
    // const thElHours = document.createElement('th')
    // thElHours.textContent = this.hoursOfOperation[i];
    // trElHours.appendChild(thElHours);

  //Generates Cities to table//

  ///////////////////////////renders totals////
    // const liEltotal = document.createElement('li');
    // liEltotal.textContent = `Total: ${total} cookies`;
    // ulEl.appendChild(liEltotal);
  
  
  // renderTable();
  

  
















// //Function to Generate Random Customer count.
// function getMinMax(minCustomer,maxCustomer) {
//   minCustomer = Math.ceil(minCustomer)
//   maxCustomer = Math.floor(maxCustomer)
//   return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
// }
// function renderCity (city) {
  
  




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
