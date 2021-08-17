'use strict'

//Objects
const seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avg: 6.3,
  cookiePerDay: [],
  calcCookieHour: function (){
    return getMinMax(this.minCustomer,this.maxCustomer);
  },
  //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
  calcCookieAvg: function () {
    return this.calcCookieHour() * this.avg
  },
  cookieHourlySales: function () {
    let startHour = 6
    for(let i = 0; i < 14; i++) {
      let hour = startHour + i;
      if (hour < 12) {
        hour = hour + 'am';
      } else if (hour === 12) {
        hour = hour + 'pm'
      } else if (hour > 12) {
        hour = (hour - 12) + 'pm';
      } 
      let cookiesSold = Math.round(this.calcCookieAvg())
      let hourObject = {};
      hourObject[hour] = cookiesSold
      this.cookiePerDay.push(hourObject);
    }
  }
};
const tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avg: 1.2,
  cookiePerDay: [],
  calcCookieHour: function (){
    return getMinMax(this.minCustomer,this.maxCustomer);
  },
  //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
  calcCookieAvg: function () {
    return this.calcCookieHour() * this.avg
  },
  cookieHourlySales: function () {
    let startHour = 6
    for(let i = 0; i < 14; i++) {
      let hour = startHour + i;
      if (hour < 12) {
        hour = hour + 'am';
      } else if (hour === 12) {
        hour = hour + 'pm'
      } else if (hour > 12) {
        hour = (hour - 12) + 'pm';
      } 
      let cookiesSold = Math.round(this.calcCookieAvg())
      let hourObject = {};
      hourObject[hour] = cookiesSold
      this.cookiePerDay.push(hourObject);
    }
  }
};
const dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avg: 3.7,
  cookiePerDay: [],
  calcCookieHour: function (){
    return getMinMax(this.minCustomer,this.maxCustomer);
  },
  //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
  calcCookieAvg: function () {
    return this.calcCookieHour() * this.avg
  },
  cookieHourlySales: function () {
    let startHour = 6
    for(let i = 0; i < 14; i++) {
      let hour = startHour + i;
      if (hour < 12) {
        hour = hour + 'am';
      } else if (hour === 12) {
        hour = hour + 'pm'
      } else if (hour > 12) {
        hour = (hour - 12) + 'pm';
      } 
      let cookiesSold = Math.round(this.calcCookieAvg())
      let hourObject = {};
      hourObject[hour] = cookiesSold
      this.cookiePerDay.push(hourObject);
    }
  }
};
const paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avg: 2.3,
  cookiePerDay: [],
  calcCookieHour: function (){
    return getMinMax(this.minCustomer,this.maxCustomer);
  },
  //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
  calcCookieAvg: function () {
    return this.calcCookieHour() * this.avg
  },
  cookieHourlySales: function () {
    let startHour = 6
    for(let i = 0; i < 14; i++) {
      let hour = startHour + i;
      if (hour < 12) {
        hour = hour + 'am';
      } else if (hour === 12) {
        hour = hour + 'pm'
      } else if (hour > 12) {
        hour = (hour - 12) + 'pm';
      } 
      let cookiesSold = Math.round(this.calcCookieAvg())
      let hourObject = {};
      hourObject[hour] = cookiesSold
      this.cookiePerDay.push(hourObject);
    }
  }
};
const lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avg: 4.6,
  cookiePerDay: [],
  calcCookieHour: function (){
    return getMinMax(this.minCustomer,this.maxCustomer);
  },
  //Function calculate average cookies per/hour based on Avg. Cookie * Random Customer/hr function. 
  calcCookieAvg: function () {
    return this.calcCookieHour() * this.avg
  },
  cookieHourlySales: function () {
    let startHour = 6
    for(let i = 0; i < 14; i++) {
      let hour = startHour + i;
      if (hour < 12) {
        hour = hour + 'am';
      } else if (hour === 12) {
        hour = hour + 'pm'
      } else if (hour > 12) {
        hour = (hour - 12) + 'pm';
      } 
      let cookiesSold = Math.round(this.calcCookieAvg())
      let hourObject = {};
      hourObject[hour] = cookiesSold
      this.cookiePerDay.push(hourObject);
    }
  }
};


//Function to Generate Random Customer count.
function getMinMax(minCustomer,maxCustomer) {
  minCustomer = Math.ceil(minCustomer)
  maxCustomer = Math.floor(maxCustomer)
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}
function renderCity (city) {
  //create article
  const articleEl = document.createElement('article')
  let cityDiv = document.getElementById('city');
  cityDiv.appendChild(articleEl);
  
  const h2El = document.createElement('h2');
  h2El.textContent = city.name;
  articleEl.appendChild(h2El);

  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  let sum = 0
  for(let i = 0; i < city.cookiePerDay.length; i++) {
    let currentHour = city.cookiePerDay[i];
    const liEl = document.createElement('li');
    let key = Object.keys(city.cookiePerDay[i])[0];
    let num = city.cookiePerDay[i][key]
    sum += num
    liEl.textContent = key + ' - ' + num;
    ulEl.appendChild(liEl);
  }
    const liElsum = document.createElement('li');
    liElsum.textContent = 'Total: ' + ' - ' + sum;
    ulEl.appendChild(liElsum);
  }
  function generateCities (city){
    city.cookieHourlySales();
    city.calcCookieHour();
    city.calcCookieAvg();
  }
  
  generateCities(seattle);
  generateCities(tokyo)
  generateCities(dubai)
  generateCities(paris)
  generateCities(lima)


  renderCity(seattle)
  renderCity(tokyo)
  renderCity(dubai)
  renderCity(paris)
  renderCity(lima)





