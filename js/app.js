'use strict'

//Objects
const seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avg: 6.3,
  cookiePerDay: [],
  calcCookieHour: function (){
    return getMinMax(this.minCustomer,this.maxCustomer)
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
      let cookiesSold = this.calcCookieAvg()
      let hourObject = {};
      hourObject[hour] = cookiesSold
      this.cookiePerDay.push(hourObject);
    }
  }
};

seattle.cookieHourlySales();
console.log(seattle);


//Function to Generate Random Customer count.
function getMinMax(minCustomer,maxCustomer) {
  minCustomer = Math.ceil(minCustomer)
  maxCustomer = Math.floor(maxCustomer)
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}
// function renderCity (city) {
//   const articleEl = document.createElement('article')
  

// }






seattle.calcCookieHour();
seattle.calcCookieAvg();

