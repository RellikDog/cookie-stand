'use strict';

//cookies sold per hour
var cookSoldPH = function(locat){    
    var custPerH = function(locat) {
       return  (Math.round(Math.random()*(locat.maxCust - locat.minCust))+locat.minCust);
     }   
    locat.cookiSold.push(Math.round(custPerH(locat) * locat.avgCook));
}
//csph loop
//csph array pop
var csphad = function(locat){
    for(var i = 0; i < locat.storeHour; i++){
     var x = cookSoldPH(locat); 
    }
  //console.log(locat.cookiSold);
  return locat.cookiSold;
  }

//add up total days sales  
var cooksDay = function(locat){
    csphad(locat);
    var totalSales = 0;
    for(var i = 0; i < locat.cookiSold.length; i++){
        var totalSales = locat.cookiSold[i] + totalSales;
    }
    locat.totalSales = totalSales
}


//1st and pike  
var pike1 = {
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    storeHour: 8,
    cookiSold: [],
    totalSales: '',
};
//csphad(pike1);
cooksDay(pike1);
console.log(pike1.cookiSold);
console.log(pike1.totalSales);